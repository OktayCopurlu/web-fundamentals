/*
Merhabalar arkadaslar

Selami bey uzun süredir CORONA dolayisi ile ücüzleri ile beraber evdedir.
Cocuklarina carpim tablosunu ögretmek zorundadir. Fakat cocuklar bir türlü carpim tablosunu anlamamaktadirlar.
Selami beyin, acilen cocuklarinin, carpim tablosunu ögrenebilecekleri bir programa ihtiyaci vardir.
Fakat istenilen programin, Selami beyin hayatini kolaylastiracak bazi özelliklere sahip olmasi gerekiyor.

- Hergün basari sayisi her cocuk icin ayri bir sekilde tutulmali (kaybolmamali) ve cocuklarinin gelisimi sürekli izlenebilir olmalidir.

Program akisi:
================
Her cocuk programi actiginda bir isim listesi ve toplam basari puani ile karsilacak.
Eger listede kendi ismi yoksa yeni bir isim girilebilecek.
Isim secildikten sonra otomatik olarak 10 soruluk oturum baslayacak.
Her soru oturumun süresi 10 saniyedir.
10 saniye sonunda veya cocugun 10 soruyu bitirmesi durumunda program bitecek ve yine isim listesine geri dönecektir.
Cocuk güncellenmis isim listesinde puanini görebilecektir.
*/

let puanArray = [{
        ogrenciAdi: "Mehmet Ali",
        ogrenciSoyadi: "Kayali",
        puan: 60
    },
    {
        ogrenciAdi: "Kamil",
        ogrenciSoyadi: "Morduman",
        puan: 40
    }
]

let cocuklar = document.querySelector("#cocuklar")
let sayilarinDivi = document.querySelector("#sayilar")
let button = document.querySelector("#kontrol")
let counter = 0;

let ogrenciAdi = document.querySelector("#ogrenci_adi")
let ogrenciSoyadi = document.querySelector("#ogrenci_soyadi")
let ogrenciEkle = document.querySelector("#ogrenci_ekle")
let hangiOgrenci = document.querySelector("#hangi_ogrenci")

let toplamCevap = 0;
//let dogruCevap = 0;
let puan = 0;

let sonuc = 0;
let soru = 1;


let student = {
    ogrenciAdi: "",
    ogrenciSoyadi: "",
    puan: ""
}

function createStudent() {
    student = {
        ogrenciAdi: `${ogrenciAdi.value}`,
        ogrenciSoyadi: `${ogrenciSoyadi.value}`,
        puan: `${puan}`
    };
    cocuklar.innerHTML = "";
    return student;
}


ogrenciListesiniYazdir()





sayilarinDivi.addEventListener("click", sonucAl)
cocuklar.addEventListener("click", calismaBaslat)
ogrenciEkle.addEventListener("click", arrayaOgrenciEkle)