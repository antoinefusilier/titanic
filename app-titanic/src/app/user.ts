import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

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
