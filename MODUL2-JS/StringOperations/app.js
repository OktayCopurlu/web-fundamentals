/*
Merhaba Arkadaslar
Asagida verilen problemleri cozunuz. 
   1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
         ornek: “asik veysel“ ==> “Asik Veysel“
   2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)
   3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
         bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....
   4)  Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. 
   5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
   *
   **
   ***
   ****
   *****
   ******
   */


//1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
console.log("**********************************************************\n Bas harfleri büyütmek\n**********************************************************")
let stringName = "oktay copurlu"
stringName = stringName.replace("o","O")
stringName = stringName.replace("c","C")
console.log(stringName)

//2) 0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz.
console.log("**********************************************************\n 10x10 100 e kadar sayıları yazdırma\n**********************************************************")
const numbers=[];
let numbersNew=0;
for(let index = 1; index < 101; index++){
      numbers.push(index)
      if(index == 10 || index == 20 || index == 30 || index == 40 || index == 50 || index == 60 || index == 70 || index == 80 || index == 90){
            numbers.push("\n")
      }
}
numbersNew = (numbers.join(","));
console.log(numbersNew)

//3) 0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar) 
console.log("**********************************************************\n Asal sayılar.....\n**********************************************************")
for(let counter =2; counter <= 100; counter++){
      let control = 0;
    for (let index = 2; index < counter; index++){
       if (counter % index == 0){
            control = 1;
            break;
        } 
    }
    if(control == 0){
      console.log(counter);
    }
}

// 4)  Kucuk , buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz.
console.log("**********************************************************\n 50 adet password.....\n**********************************************************")
let passwordLength = 10;
for (let counter=1; counter <= 50; counter++){
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!'^+%&/()=?_";
        password = "";
    for (let index = 0; index < passwordLength; ++index) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
      console.log(counter," " + password);
}

/* 5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
   *
   **
   ***
   ****
   *****
   ******
*/

console.log("**********************************************************\n * dan şekiller.....\n**********************************************************")
let stars = [];
for (let index = 0; index < 6; index++ ){
      stars.push("*")
      console.log(stars.join(""))
}