/*
This program should be able to control the following situations.
1. Cabbar Usta only repairs red and black cars.
2. It only accepts BMW, Audi and VW brands.
3. BMW cars only accept red ones and age range from 2010 to 2019.
4. Audi only accepts age ranges from 2005 to 2010 or from 2014 to 2020.
5. VW only accepts black ones and age range between 2001 and 2018.
6. As of this year, Cabbar Usta also accepts BMWs in black with 2020 start-up.
7. It provides service to its customers for more than 5 years in all car models (all age ranges and all colors).
*/
const carModel = "VW"; // prompt("Enter Your Car Model");
const carColor = "Black"; // prompt("Enter Your Car Color");
const carBirthYear = 2007; // prompt("Enter Your Car Birth Year");
const costumerYear = 2; // prompt("Enter Costumer Year");

if(costumerYear >= 5){
    console.log("ACCEPTED CAR :" +" "+carModel +" "+ carColor +" "+ carBirthYear )
}else if(carModel=="BMW"){
    if (((carBirthYear >= 2010) && (carBirthYear <= 2019) && (carColor == "Red")) || ((carBirthYear >= 2020) && (carColor == "Black"))){
        console.log("ACCEPTED CAR :" +" "+carModel +" "+ carColor +" "+ carBirthYear )
    }else{
        console.log("UNACCEPTED CAR")
    }
}else if(carModel=="Audi"){
    if (((carBirthYear >= 2005) && (carBirthYear <= 2010)) || ((carBirthYear >= 2014) && (carBirthYear <= 2020)) && ((carColor == "Red") || (carColor == "Black"))){
        console.log("ACCEPTED CAR :" +" "+carModel +" "+ carColor +" "+ carBirthYear )
    }else{
        console.log("UNACCEPTED CAR")
    }
}else if(carModel=="VW"){
    if ((carBirthYear >= 2001) && (carBirthYear <= 2018) && (carColor == "Black")){
        console.log("ACCEPTED CAR :" +" "+carModel +" "+ carColor +" "+ carBirthYear )
    }else{
        console.log("UNACCEPTED CAR")
    }
}else{
    console.log("UNACCEPTED CAR")
}