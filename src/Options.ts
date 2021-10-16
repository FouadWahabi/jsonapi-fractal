export default interface Options {
  idKey?: string,
  fields?: any,
  changeCase?: string,
  deep?: boolean;

  // custom properties
  [key: string]: any
}
