/*
Merhaba arkadaslar
Bu haftaki diger odevimiz iki boyutlu Array'ler ile ilgili olacaktir.
Yukarida verilen cok boyutlu array'de her bir array ilk slotunda ögrenci ismi ve sonrasinda sirasi ile 
Matematik, Almanca, Ingilizce ve Cografya derslerini icermektedir. Yazacaginiz kod, bu cok boyutlu array üzerinde 
asagidaki islemleri gerceklestirmesi gerekmektedir.

- Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
- Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
- Sinifin en kötü oldugu dersi gostermesi
- Tüm derslerin en iyi ögrencilerini bulmasi
 */

const notes = [
    ["Hans", 80, 90, 10, 50], 
    ["Ulrich", 94, 36, 76, 74], 
    ["Olaf", 30, 60, 34, 78], 
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

// - Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
let dersOrtalamasi = [];

function bulDersOrtalmasi() {
    for (let satir = 1; satir < notes[0].length; satir++){
        let notToplami = 0
        for (let sutun = 0; sutun < notes.length; sutun++){
            notToplami = notToplami + notes[sutun][satir];
        }
        Ortalama = notToplami / notes.length
        dersOrtalamasi.push(Ortalama)
    }
    return;
}
console.log(bulDersOrtalmasi(),"\n", 
    "Matematik Ortlamasi:", dersOrtalamasi[0],"\n", 
    "Almanca Ortalamasi:", dersOrtalamasi[1],"\n", 
    "Ingilizce Ortalamasi:", dersOrtalamasi[2],"\n", 
    "Cografya Ortalamasi:", dersOrtalamasi[3])

console.log("**************************************************************")
//- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
const ISTENEN_PUAN = 70;
let YetmisPuaniGecenler = []

for (let sutun = 0; sutun < notes.length; sutun++) {
    for (let satir = 1; satir < notes.length; satir++) {
        if (ISTENEN_PUAN < notes[sutun][satir]) {
            YetmisPuaniGecenler.push(notes[sutun][0])
            break;
        }
    }
}
console.log("70 Puan Üstünde Not Alan Ögrenciler:", YetmisPuaniGecenler)

console.log("*************************************************************")
//- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
const matametikOrtalamasi = dersOrtalamasi[0]
const almancaOrtalamasi = dersOrtalamasi[1]
const ingilizceOrtalamasi = dersOrtalamasi[2]
const cografyaOrtalamasi = dersOrtalamasi[3]
let matematikDersindeBasariliOgrenciler = []
let almancaDersindeBasariliOgrenciler = []
let ingilizceDersindeBasariliOgrenciler = []
let cografyaDersindeBasariliOgrenciler = []

for (let sutun = 0; sutun < notes.length; sutun++) {
    if (notes[sutun][1] > matametikOrtalamasi) {
        matematikDersindeBasariliOgrenciler.push(notes[sutun][0]);
    }
    if (notes[sutun][2] > almancaOrtalamasi) {
        almancaDersindeBasariliOgrenciler.push(notes[sutun][0]);
    }
    if (notes[sutun][3] > ingilizceOrtalamasi) {
        ingilizceDersindeBasariliOgrenciler.push(notes[sutun][0]);
    }
    if (notes[sutun][4] > cografyaOrtalamasi) {
        cografyaDersindeBasariliOgrenciler.push(notes[sutun][0]);
    }
}
console.log("Matemetik Dersinde Ortalamanin Ustunde Olan Ögrenciler :", matematikDersindeBasariliOgrenciler)
console.log("Almanca Dersinde Ortalamanin Ustunde Olan Ögrenciler   :", almancaDersindeBasariliOgrenciler)
console.log("Ingilizce Dersinde Ortalamanin Ustunde Olan Ögrenciler :", ingilizceDersindeBasariliOgrenciler)
console.log("Cografya Dersinde Ortalamanin Ustunde Olan Ögrenciler  :", cografyaDersindeBasariliOgrenciler)

console.log("*************************************************************")
//- Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
if (matametikOrtalamasi > almancaOrtalamasi && matametikOrtalamasi > ingilizceOrtalamasi && matametikOrtalamasi > cografyaOrtalamasi){
    console.log("Sınıfın en iyi dersi Matematik'dir. Ortalaması  :",matametikOrtalamasi)
}else if (almancaOrtalamasi > matametikOrtalamasi && almancaOrtalamasi > ingilizceOrtalamasi && almancaOrtalamasi > cografyaOrtalamasi){
    console.log("Sınıfın en iyi dersi Almancadır'dir. Ortalaması :", almancaOrtalamasi)
}else if (ingilizceOrtalamasi > matametikOrtalamasi && ingilizceOrtalamasi > almancaOrtalamasi && ingilizceOrtalamasi > cografyaOrtalamasi){
    console.log("Sınıfın en iyi dersi İngilizce'dir. Ortalaması  :", ingilizceOrtalamasi)
}else if (cografyaOrtalamasi > matametikOrtalamasi && cografyaOrtalamasi > almancaOrtalamasi && cografyaOrtalamasi > ingilizceOrtalamasi){
    console.log("Sınıfın en iyi dersi Coğrafya'dir. Ortalaması   :", cografyaOrtalamasi)
}

console.log("**************************************************************")
//- Sinifin en kötü oldugu dersi gostermesi
if (matametikOrtalamasi < almancaOrtalamasi && matametikOrtalamasi < ingilizceOrtalamasi && matametikOrtalamasi < cografyaOrtalamasi){
    console.log("Sınıfın en kötü dersi Matematik'dir. Ortalaması  :",matametikOrtalamasi)
}else if (almancaOrtalamasi < matametikOrtalamasi && almancaOrtalamasi < ingilizceOrtalamasi && almancaOrtalamasi < cografyaOrtalamasi){
    console.log("Sınıfın en kötü dersi Almancadır'dir. Ortalaması :", almancaOrtalamasi)
}else if (ingilizceOrtalamasi < matametikOrtalamasi && ingilizceOrtalamasi < almancaOrtalamasi && ingilizceOrtalamasi < cografyaOrtalamasi){
    console.log("Sınıfın en kötü dersi İngilizce'dir. Ortalaması  :", ingilizceOrtalamasi)
}else if (cografyaOrtalamasi < matametikOrtalamasi && cografyaOrtalamasi < almancaOrtalamasi && cografyaOrtalamasi < ingilizceOrtalamasi){
    console.log("Sınıfın en kötü dersi Coğrafya'dir. Ortalaması   :", cografyaOrtalamasi)
}

console.log("**************************************************************")
//- Tüm derslerin en iyi ögrencilerini bulmasi
let matematikPuani = 0;
let almancaPuani = 0;
let ingilizcePuani = 0;
let cografyaPuani = 0;

let matematiktenEnIyiPuanAlanOgrenci = "";
let almancadanEnIyiPuanAlanOgrenci = "";
let ingilizcedenEnIyiPuanAlanOgrenci = "";
let CografyadanEnIyiPuanAlanOgrenci = "";

for (let sutun = 0; sutun < notes.length; sutun++) {
    if (notes[sutun][1] > matematikPuani) {
        matematikPuani = notes[sutun][1];
        matematiktenEnIyiPuanAlanOgrenci = notes[sutun][0];
    }
    if (notes[sutun][2] > almancaPuani) {
        almancaPuani = notes[sutun][2];
        almancadanEnIyiPuanAlanOgrenci = notes[sutun][0];
    }
    if (notes[sutun][3] > ingilizcePuani) {
        ingilizcePuani = notes[sutun][3];
        ingilizcedenEnIyiPuanAlanOgrenci = notes[sutun][0];
    }
    if (notes[sutun][4] > cografyaPuani) {
        cografyaPuani = notes[sutun][4];
        CografyadanEnIyiPuanAlanOgrenci = notes[sutun][0];
    }
}

console.log("Matematik Dersinden En Basarili Ögrenci :", matematiktenEnIyiPuanAlanOgrenci,matematikPuani)
console.log("Almanca Dersinden En Basarili Ögrenci   :", almancadanEnIyiPuanAlanOgrenci,almancaPuani)
console.log("Ingilizce Dersinden En Basarili Ögrenci :", ingilizcedenEnIyiPuanAlanOgrenci,ingilizcePuani)
console.log("Cografya Dersinden En Basarili Ögrenci  :", CografyadanEnIyiPuanAlanOgrenci,cografyaPuani)