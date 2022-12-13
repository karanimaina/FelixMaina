export class  UserPost{
  username :string
  email :string
  phoneNumber:string
  password:string


  constructor(username: string , email: string , phoneNumber: string , password: string) {
    this.username = username;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}
