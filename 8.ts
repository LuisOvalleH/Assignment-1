export class Person{
     private name : string;
     private age : number;
     private city : string;
     
     constructor (name : string, age: number, city: string ){
        this.name = name;
        this.age = age;
        this.city = city;

     }


     public getName() : string{
        return this.name;
     }
     public setName(newName : string) : void{
        this.name = newName;
     }
     public getAge() : number{
        return this.age;
     }
     public setAge(newAge : number) : void{
        this.age = newAge;
     }
     public getCity() : string{
        return this.city;
     }
     public setCity(newCity : string) : void{
        this.city = newCity;
     }

}
