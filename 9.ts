import { Person } from "./8";

let sujeto1 : Person = new Person("Carlos", 19 , "Guatemala")

console.log(sujeto1.getName())
console.log(sujeto1.getAge())
console.log(sujeto1.getCity())



sujeto1.setName("Daniel")
sujeto1.setAge(20)
sujeto1.setCity("Quetzaltenango")

console.log(sujeto1.getName())
console.log(sujeto1.getAge())
console.log(sujeto1.getCity())

