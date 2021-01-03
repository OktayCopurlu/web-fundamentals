const fishFarm = [{
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1), // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12), // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
]

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
    return console.log("5.Cevap : AB den gelen fiyatı 10 chf den az balıklar :" + ABdenGelenUcuzBaliklar)
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

/*
//4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

let balikSonKullanmaTarihi = [];
let siraliListe = [];
let girisTarihi = [];

function gosterSonKullanmaTarihi() {
    for (let index = 0; index < fishFarm.length; index++) {
        const dayanmaSuresi = fishFarm[index].durationInDays;
        girisTarihi.push(fishFarm[index].entryDate);
        let balikIsimleri = fishFarm[index].fishType;

        balikSonKullanmaTarihi.push(balikIsimleri + "  " + girisTarihi.sort(function(a, b) { return a - b }))


        //balikSonKullanmaTarihi.push(girisTarihi.setDate(girisTarihi.getDate() + dayanmaSuresi))
    }

    //balikSonKullanmaTarihi.sort(function(a, b) { return a - b });
    console.log(balikSonKullanmaTarihi);

    return
}

gosterSonKullanmaTarihi()
*/