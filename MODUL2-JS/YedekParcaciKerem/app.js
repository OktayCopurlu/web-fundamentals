/*
Oto yedek parca isi yapan Kerem Bey, toptancilardan aldigi yedek parcalari, kendi envanterine kendi sistemi ile kaydedip, 
bu parcalari depoya yerlestirirken bir takim süreclerden gecirmek istemektir. Bu süreclerin her biri bir fonksiyon olarak tanimlanacaktir.

Araba parcalari ise bir array icinde verilecektir.

Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.

1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
*/

let yedekParca = [
    "motor ",
    "direksiyon ",
    "jant ",
    "cam ",
    "ayna ",
    "far ",
    "anahtar ",
    "fren ",
    "4 lü ampül ",
    "8 li ateşleme mandali ",
  ];
  
//1. Parca isimleri büyük harflere cevrilecektir.
function changeToUpperCase(a) {
    let upperCaseList = [];
    for (let index = 0; index < yedekParca.length; index++) {
        upperCaseList.push(yedekParca[index].toUpperCase());
    }
    return console.log("Büyük Harf ile Parça Listesi: " + upperCaseList);
}
changeToUpperCase(yedekParca)

console.log("**************************************************************")
//2. Parca isimlerinden sayilar cikartilacaktir.
function extractNumbers(list){
    let withoutNumberPartList =[]
    list.map(function(part) {
        withoutNumberPartList.push(part.replace(/[0-9]/g,""))
    })
    return console.log(withoutNumberPartList)
    }
extractNumbers(yedekParca)

console.log("**************************************************************")
//3. Parca isimleri tersine cevrilecektir.
function reverseParts(List) {
    let reversePartList = []
    List.map(function(part){
    reversePartList.push(part.split("").reverse().join(""))
    })
    return console.log(reversePartList)
}
reverseParts(yedekParca)

console.log("**************************************************************")
//4. Her parcanin basina KEREMAG_ eklenecektir.
function addWord(List){
    let word = "KEREMAG_"
    let addWordList=[]
    for(let index=0; index < yedekParca.length;index++){
        addWordList.push(word + yedekParca[index] )
    }
    return console.log(addWordList)
}
addWord(yedekParca)
console.log("**************************************************************")
//5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
function addDate(List){
    let now = new Date();
        let addDateList=[]
    for(let index=0; index < yedekParca.length;index++){
        addDateList.push(yedekParca[index] + ": Sisteme Giriş Tarihi :" + now)
    }
    return console.log(addDateList)
}
addDate(yedekParca)