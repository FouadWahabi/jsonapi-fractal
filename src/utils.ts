import { camelCase, snakeCase, paramCase } from 'change-case'

export function stringChangeCase (stringLiteral, caseType) {
  const caseTypes = {
    camelCase,
    snakeCase,
    paramCase,
    kebabCase: paramCase
  }

  const caseFn = caseTypes[caseType]

  if (!caseFn) {
    throw new Error('Invalid case type: ' + caseType)
  }

  return caseFn(stringLiteral);
}

export function changeCase (attributes, caseType, deep = false) {
  const newAttributes = {}

  for (const key of Object.keys(attributes)) {
    if (
      deep &&
      Object.prototype.toString.call(attributes[key]) === '[object Object]'
    ) {
      newAttributes[stringChangeCase(key, caseType)] = changeCase(attributes[key], caseType, deep)
    } else {
      newAttributes[stringChangeCase(key, caseType)] = attributes[key]
    }
  }

  return newAttributes
}

export function whitelist (obj, list) {
  const result = {}

  for (const key of list) {
    result[key] = obj[key]
  }

  return result
}
