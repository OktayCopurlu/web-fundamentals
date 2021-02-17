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
let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let ogrenciAdi = document.querySelector("#ogrenci_adi")
let ogrenciSoyadi = document.querySelector("#ogrenci_soyadi")
let ogrenciEkle = document.querySelector("#ogrenci_ekle")

let toplamCevap = 0;
let dogruCevap = 0;
let puan = 0;

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

function arrayaOgrenciEkle() {
    if ((ogrenciAdi.value != "") && (ogrenciSoyadi.value != "")) {
        puanArray.push(createStudent())
        ogrenciListesiniYazdir()
    } else {
        alert("Lütfen bilgileri girin")
    }
    ogrenciAdi.value = "";
    ogrenciSoyadi.value = "";
}

function ogrenciListesiniYazdir() {
    return puanArray.map((eleman, index) => {
        cocuklar.innerHTML += `
        <div id="${index}">
        <spam>${eleman.ogrenciAdi}</spam>
        <spam>${eleman.ogrenciSoyadi}</spam>
        <spam>${puan}</spam>
        <button id="${eleman.ogrenciAdi}">Çalışmaya Başla</button>
        </div>`

    }).join("");
}
ogrenciListesiniYazdir()


function randomSayi(pSayilar) {
    return pSayilar[Math.floor(Math.random() * pSayilar.length)];
}

let sayi1 = "";
let sayi2 = "";
let sonuc = 0;
let soru = 1;

function calis() {
    sayi1 = randomSayi(sayilar);
    sayi2 = randomSayi(sayilar)
    calismaSayfası()

    soru += 1
}

//setInterval(calis, 10000)

function islemler(a, b) {
    return sonuc = a * b
}


function yazdir() {

    return sayilarinDivi.innerHTML = `
    <span id="ilk_sayi" style="color:red">${soru}. Soru  : </span>
    <span id="ilk_sayi">${sayi1} X </span>
    <span id="ikinci_sayi">${sayi2} = </span>
    <input id="input"= type="text">
    <button id="kontrol">Kontrol</button>
    `

}
sayilarinDivi.addEventListener("click", sonucAl)

function calismaSayfası() {
    islemler(sayi1, sayi2)
    yazdir()
}
let hangiOgrenci = document.querySelector("#hangi_ogrenci")

function calismaBaslat(pEvent) {
    puanArray.filter(eleman => {
        if (pEvent.target.id == eleman.ogrenciAdi) {
            hangiOgrenci.innerHTML = `
                <span id="${eleman.ogrenciSoyadi}">${eleman.ogrenciAdi + "  " + eleman.ogrenciSoyadi + "  : " + puan}</span>
                <button id="bitir">Bitir</button>
                `
            calismaSayfası()
        }
    })
}


function sonucAl(pEvent) {
    let inputValue = document.querySelector("#input").value
    if ((pEvent.target.id == "kontrol") && (inputValue != "")) {

        toplamCevap += 1
        if (inputValue == sonuc) {
            dogruCevap += 1
        }
        inputValue = "";
        puan = (dogruCevap / toplamCevap) * 100;
        calis()
    }
}

function bitir(pEvent) {
    if (pEvent.target.id == "bitir") {
        document.querySelector("#calisma_sayfasi").innerHTML = "";

    }
}
hangiOgrenci.addEventListener("click", bitir)
cocuklar.addEventListener("click", calismaBaslat)
ogrenciEkle.addEventListener("click", arrayaOgrenciEkle)