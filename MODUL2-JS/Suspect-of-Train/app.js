/*There was a tragic injury at a village station yesterday. Supheli escaped from the scene to hide on a train with 10 wagons.
In the train with 10 wagons, one of the wagons is hidden. To find out which car the suphel is hiding in, you need a prediction program.
 
Program feed:
1. Random wagon numbers from 1 to 10 are generated and stored in this wagon.
2. The user will have to find the wagon with the problem in maximum 4 attempts.
3. The user will be guided by the expressions in the front wagon or the rear wagon to help him find which wagon he is in more easily.
4. How many times the user knows and his score (out of 100) will be printed on the console.*/

let suspiciousWagon = []
let locatedWagon = [];
let numberOfPredictions =0;
let prediction=""; //prompt("Tahmininizi Giriniz :")

//Random wagon numbers from 1 to 10 are generated and stored in this wagon.
let number = Math.floor((Math.random() * 10) + 1);
suspiciousWagon.push(number)

//The user will have to find the wagon with the problem in maximum 4 attempts.
//The user will be guided by the expressions in the front wagon or the rear wagon to help him find which wagon he is in more easily.
for(let numberOfPredictions=0; numberOfPredictions < 4; numberOfPredictions++){
    if (suspiciousWagon[0]==prediction){
        console.log("congratulations correct guess...")
        locatedWagon.push(prediction)
        break
    }else if (prediction > suspiciousWagon[0]){
        console.log("see front wagons...") 
    }else if (prediction < suspiciousWagon[0]){
        console.log("see back wagons...")
    }else if(numberOfPredictions == 4){
        console.log("Your 4 attempts have expired...")
    }
}

//How many times the user knows and his score (out of 100) will be printed on the console.
if (numberOfPredictions==1){
    console.log("Congratulations you have known first times. You got 100 points..")
}else if (numberOfPredictions==2){
    console.log("Congratulations you have known second times. You got 75 points..")
}else if (numberOfPredictions==3){
    console.log("Congratulations you have known three times. You got 50 points..")
}else if (numberOfPredictions==4){
    console.log("Congratulations you have known four times. You got 25 points.")
}else{
    console.log("Your lost your points 0")
}