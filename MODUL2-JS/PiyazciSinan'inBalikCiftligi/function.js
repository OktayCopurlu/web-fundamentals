/*
1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
6) Toplam balik stoku ne kadardir?
7) En pahali olan balik hangisidir?
8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
*/

//1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?

let balik500kgUzeri = [];

function bul500kgUzeriBaliklar() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].stockVolumeInKg;
        if (element > 500) {
            balik500kgUzeri.push(fishFarm[index].fishType)
        }
    }
    return console.log("1.Cevap : Stok miktarı 500kg üstü olan balıklar :" + balik500kgUzeri)
}
bul500kgUzeriBaliklar()


//2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
let balik9_ve12_arasiFiyatlar = [];

function bulFiyati_9ve12_arasiBaliklar() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].price;
        if ((element > 9) && (element < 12)) {
            balik9_ve12_arasiFiyatlar.push(fishFarm[index].fishType + " Fiyatı  :" + element)
        }
    }
    return console.log("2.Cevap : Fiyat 9 ve 12 arası olan balıklar :" + balik9_ve12_arasiFiyatlar)
}

bulFiyati_9ve12_arasiBaliklar()

//3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

let BernVeKisBaliklari = [];

function bulSezonVeSehir() {
    for (let index = 0; index < fishFarm.length; index++) {
        let elementMevsim = fishFarm[index].season;
        let elementSehir = fishFarm[index].saleLocations;

        for (let sehirIndex = 0; sehirIndex < elementSehir.length; sehirIndex++) {

            if ((elementMevsim == "Winter") & (elementSehir[sehirIndex] === "BE")) {
                BernVeKisBaliklari.push(fishFarm[index].fishType)
            }
        }
    }
    return console.log("3.Cevap : Kış Sezonunda Bernde Olan Balıklar  :" + BernVeKisBaliklari)
}
bulSezonVeSehir()

//4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

function gosterSonKullanmaTarihi() {
    let newList = [];
    fishFarm.map((day) => {
        day.entryDate.setDate(day.entryDate.getDate() + day.durationInDays);
        let lastUseDate = new Date(day.entryDate);
        newList.push({ date: lastUseDate, name: day.fishType });
    });
    return newList;
}
let newListToSort = gosterSonKullanmaTarihi().sort(function(a, b) {
    return b.date.getTime() - a.date.getTime();
});
console.log(newListToSort);
gosterSonKullanmaTarihi()

//5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.

let ABdenGelenUcuzBaliklar = [];

function bulABdenGelenUcuzBalik() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].price;
        let neredenGeldi = fishFarm[index].originCountry;

        if ((element < 10) && ((neredenGeldi == "Spain") || (neredenGeldi == "Italy") || (neredenGeldi == "GREECE") || (neredenGeldi == "France") || (neredenGeldi == "Poland"))) {
            ABdenGelenUcuzBaliklar.push(fishFarm[index].fishType + "  -- Menşe Ülke :" + neredenGeldi + "   -- Fiyatı :" + element)
        }
    }
    let alfabatikListe = ABdenGelenUcuzBaliklar.sort()
    return console.log("5.Cevap : AB den gelen fiyatı 10 chf den az balıklar :" + alfabatikListe)
}
bulABdenGelenUcuzBalik()

//6) Toplam balik stoku ne kadardir?

let toplamStok = 0;

function bultoplamStok() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].stockVolumeInKg;
        toplamStok = toplamStok + element
    }
    return console.log("6.Cevap : Toplam Stok : " + toplamStok)
}
bultoplamStok()

//7) En pahali olan balik hangisidir?

let enPahaliBalik = 0;
let enPahaliBalikIsmi = "";

function bulEnPahaliBalik() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].price;

        if (enPahaliBalik < element) {
            enPahaliBalik = element
            enPahaliBalikIsmi = fishFarm[index].fishType
        }
    }
    return console.log("7.Cevap : En Pahalı Balık : " + enPahaliBalikIsmi + " -- Fiyatı : " + enPahaliBalik)
}
bulEnPahaliBalik()

//8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?

let kacGunDuruyor = 0;
let enUzunDuranBalikUlkesi = [];

function bulEnUzunDuranBalikUlkeleri() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].durationInDays;

        if (kacGunDuruyor <= element) {
            kacGunDuruyor = element
            enUzunDuranBalikUlkesi.push(fishFarm[index].originCountry)
        }
    }
    return console.log("8.Cevap : En Uzun Duran Balik Ülkeleri : " + enUzunDuranBalikUlkesi + " -- Dayanma Süreleri : " + kacGunDuruyor)
}
bulEnUzunDuranBalikUlkeleri()

//9) Kis ve sonbahar sezonu icin swiss romande region'da (VD NE GE JU) satilan baliklarin ortalama fiyati nedir? 

let ortalamaFiyat = 0;
let romandyBalikFiyatlari = [];

function bulOrtalamaFiyat() {
    for (let index = 0; index < fishFarm.length; index++) {
        let balikSezon = fishFarm[index].season;
        let bölgeler = fishFarm[index].saleLocations;
        let fiyat = fishFarm[index].price;

        for (let sehirIndex = 0; sehirIndex < bölgeler.length; sehirIndex++) {
            let neredeSatiliyor = bölgeler[sehirIndex];

            if (((balikSezon == "Winter") || (balikSezon == "Autumn")) && ((neredeSatiliyor == "VD") || (neredeSatiliyor == "NE") || (neredeSatiliyor == "GE") || (neredeSatiliyor == "JU"))) {
                romandyBalikFiyatlari.push(fiyat)
            }
        }
    }

    for (let OrtalamaIndex = 0; OrtalamaIndex < romandyBalikFiyatlari.length; OrtalamaIndex++) {
        let OrtalamaElement = romandyBalikFiyatlari[OrtalamaIndex];
        ortalamaFiyat = ortalamaFiyat + OrtalamaElement
    }

    ortalamaFiyat = ortalamaFiyat / romandyBalikFiyatlari.length
    return console.log("9.Cevap : Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati :" + ortalamaFiyat)
}

bulOrtalamaFiyat()

//10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?

let ticinoStok = 0;

function bulTicinoStok() {
    for (let index = 0; index < fishFarm.length; index++) {
        const locationElement = fishFarm[index].saleLocations;

        for (let saleIndex = 0; saleIndex < locationElement.length; saleIndex++) {
            const kanton = locationElement[saleIndex];

            if (kanton == "TI") {
                ticinoStok = ticinoStok + fishFarm[index].stockVolumeInKg
            }
        }
    }
    return console.log("10.Cevap : Ticino Kantonu için Balık Stok Miktarı :" + ticinoStok)
}
bulTicinoStok()

//11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

let ZhOrtalamaGram = 0;
let gramaj = [];

function bulZhOrtalamaGram() {
    for (let index = 0; index < fishFarm.length; index++) {
        const location = fishFarm[index].saleLocations;
        const orijinUlke = fishFarm[index].originCountry;
        const sezon = fishFarm[index].season;

        for (let saleIndex = 0; saleIndex < location.length; saleIndex++) {
            const kanton = location[saleIndex];

            if ((sezon == "Summer") && (kanton == "ZH") && ((orijinUlke == "Egypt") || (orijinUlke == "Norway") || (orijinUlke == "Japan") || (orijinUlke == "Vietnam") || (orijinUlke == "United Kingdom"))) {
                gramaj.push(fishFarm[index].itemWeightInGrams);
                ZhOrtalamaGram = ZhOrtalamaGram + fishFarm[index].itemWeightInGrams;
                ZhOrtalamaGram = ZhOrtalamaGram / gramaj.length
            }
        }
    }
    return console.log("11.Cevap : Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajı :" + ZhOrtalamaGram)
}
bulZhOrtalamaGram()