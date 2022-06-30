// export interface Analyze {
//   Sex: string,
//   Age: string,
//   Class: string
// }

export class Analyze {
  constructor(
    public Sex: {
      female: boolean,
      male: boolean
    } ,
    public min_age: string,
    public max_age: string,
    public Class: {
      c1: boolean,
      c2: boolean,
      c3: boolean
    }
  ){

  }
}
