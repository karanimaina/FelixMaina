 export class AboutMe {
   name:string
   description: string;
   birthDay: Date ;
   age:string ;
   email: string ;
   phoneNumber:string ;
   city: string;
   specialize:string ;
   percentage: string;


   constructor(name: string, description: string, birthDay: Date, age: string, email: string, phoneNumber: string, city: string, specialize: string, percentage: string) {
     this.name = name;
     this.description = description;
     this.birthDay = birthDay;
     this.age = age;
     this.email = email;
     this.phoneNumber = phoneNumber;
     this.city = city;
     this.specialize = specialize;
     this.percentage = percentage;
   }
 }
