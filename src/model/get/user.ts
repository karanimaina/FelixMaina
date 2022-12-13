export class  UserGet{
  id :number
  name:string
  username: string
  password:string
  constructor(name: string, username: string, password: string) {
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
