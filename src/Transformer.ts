import Options from './Options'

export default abstract class Transformer {
  type = 'entities'
  relationships: string[] = []

  abstract transform(entity: any, options: Options): any
}
