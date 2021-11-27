import { CoreAPI } from './CoreApi'
import d3 from 'd3'

export class SampleColorsAPI extends CoreAPI {
  constructor() {
    super()
  }

  getCsv = () =>
    this.get<string>(
      'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv',
    ).then(({ data }) => {
      return d3.csvParse(data)
    })
}
