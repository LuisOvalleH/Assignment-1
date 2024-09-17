
function RandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random : number = RandomNumber(1, 10);
console.log(random);

if (random<5){
    console.log("Numero random es menor a 5");
}else if(random>5){
    console.log("Numero random es mayor a 5");
}else{
    console.log("Numero random es igual a 5")
}