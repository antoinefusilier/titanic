export interface User {
  email: string,
  password: string
}

export class User {
  constructor(
    public email: string,
    public password: string,
  ) { }

}
