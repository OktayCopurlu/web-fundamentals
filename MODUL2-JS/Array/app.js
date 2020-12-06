/* Create an array of at least 10 numbers. The numbers in the array are:
- square roots
- frames
- the sum of all numbers
- the average
- largest and smallest number
Type the program that found */

const array = [12, 40, 6, 8, 102, 12, 14, 3, 18, 20];

const squareRoots = [];
const frames = [];
let theSumOfAllNumbers = 0;
let avarage = 0;
let biggestNumber =0;
let smallestNumber = array[0]; 

let total = 0; // it is for avarage

//that is square roots calculation
for (let counter = 0; counter < array.length ; counter++){
    let number = (array[counter] ** 0.5)
    squareRoots.push(number)
}

//that is frames calculation
for (let counter = 0; counter < array.length ; counter++){
    let number = (array[counter] ** 2)
    frames.push(number)
}

//that is the Sum Of All Numbers calculation
for (let counter = 0; counter < array.length ; counter++){
    let number = (array[counter])
    theSumOfAllNumbers = theSumOfAllNumbers + number
}

//that is avarage calculation
for (let counter = 0; counter < array.length ; counter++){
    let number = (array[counter])
    total = total + number
    avarage = total / array.length
}

//these are biggest Number and smallest Number calculation
for (let counter = 0; counter < array.length ; counter++){
   if(biggestNumber < (array[counter])){
    biggestNumber = (array[counter])
   }else if(smallestNumber > (array[counter])){
    smallestNumber = (array[counter])
    }
}

//if you want to write on console all these, you can use to write these code

/*
console.log("square Roots  :" + squareRoots)
console.log("*******************************************************************************************")
console.log("frames  :" + frames)
console.log("*******************************************************************************************")
console.log("the Sum Of All Numbers  :" + theSumOfAllNumbers)
console.log("*******************************************************************************************")
console.log("avarage  :" + avarage)
console.log("*******************************************************************************************")
console.log("biggest Number  :" + biggestNumber)
console.log("*******************************************************************************************")
console.log("smallest Number  :" + smallestNumber)
*/