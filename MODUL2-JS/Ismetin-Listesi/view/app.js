/*Program akisi
=======================
Ismet sisteme girer ve ilk olarak müsterilerinin listesini görür.
-Program açıldığında Müşteri Listesi ekranda görünmesi için,
    - Bir müşteri array i oluşturup bu array ekrana yazdırılmalı.
    - Müşteri eklemek için bir forum koyulabilir.(benim tercihim)

-Bir müsterinin üzerine tikladiginda, o müsteriye ait bir veya birden fazla hayatina kast edilen kisi listesi karsisina cikar.
    -Müşteri listesindeki kişilerin üzerine "Click" verilmesi gerekiyor.
    -Müşteriye tıklandığında müşteri talep listesi(başka bir array) Oluşturulmalı ve ekrana yazdırılmalı.

-Bu listede müstakbel maktülün üzerine tikladiginda o kisinin adreslerini görür.
    - Hedef kişinin adres listesi( array ) olmalı.
    - Hedef kişiye üzerine "Click" verilmeli.
    - Hedef kişiye Click olduğunda kişinin adresleri ekrana yazdırılmalı.

- Ayrica eger listedeki kisi dar-ül bekaya irtihal etti ise o kisiyi listede isaretleyecek bir butonda mevcuttur
ve listede ismi daha silik gösterilmelidir.
    - Hedef kisi ile islem bittikten sonra içinde bulunduğu tagın "Style" değiştirilmeli.
    - bunu değişikliği yapmak için bir "click" butonu eklenip üzerine tıklandığında işlem gerçekleşmeli.

Kriterler:
=======================
- Analiz bölümünün bulunmasi (user interaction ve technical details)
- Programin düzgün calismasi
- Güzel bir dizayn (bootstrap kullanimi olmali)
- Localstorage kullanilmasi (mümkünse bunun icin bir service class'i yazilmasi)
- Ekran dizaynlarinin mümkün oldugu kadar Template Literaller ile dizayn edilmesi
- Isimlendirmelerinin dogru yapilmasi
- Data Modelin olusturulmasi
- Kod içine yorumların eklenmesi
- Kod makyajina dikkat edilmesi

OPSIYONEL:
- Modelin testinin yapilmasi*/


let musteriListesi = [{
        adi: "Hamdi",
        soyadi: "Kırkyalan",
        aciklama: "Musteri Çok Ciddi, Hepsinin 1 Nisana kadar temizlenmesini istiyor. 50.000 Chf ödedi. 50.000 Chf iş bitiminde ödeyecek.",

        maktuller: [{
                adi: "Ahmet",
                soyadi: "Girgin",
                kisiHakkindaBilgi: "Çok dikkatli degil davranıyor. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Sevgi Yolu No:22 Kuzey Izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]
            },

            {
                adi: "Mehmet",
                soyadi: "Geçgin",
                kisiHakkindaBilgi: "Çok dikkatli davranıyor degil. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]
            }
        ]
    },
    {
        adi: "Zehre",
        soyadi: "Musdegerli",
        aciklama: "Musteri Çok Ciddi, Hepsinin 1 Nisana kadar temizlenmesini istiyor. 50.000 Chf ödedi. 50.000 Chf iş bitiminde ödeyecek.",

        maktuller: [{
                adi: "AliOsman",
                soyadi: "Ankarali",
                kisiHakkindaBilgi: "Çok dikkatli davranmıyor. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]
            },
            {
                adi: "Seyhan",
                soyadi: "Seyranli",
                kisiHakkindaBilgi: "Dikkatsizin biri davranıyor. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]
            }
        ]
    },
    {
        adi: "Ismet",
        soyadi: "Altınpınar",
        aciklama: "Musteri Çok Ciddi, Hepsinin 1 Nisana kadar temizlenmesini istiyor. 50.000 Chf ödedi. 50.000 Chf iş bitiminde ödeyecek.",

        maktuller: [{
                adi: "Sehriban",
                soyadi: "karcicegi",
                kisiHakkindaBilgi: "Çok dikkatli davranıyor mu bilmiyorum. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]

            },
            {
                adi: "Önder",
                soyadi: "Gunler",
                kisiHakkindaBilgi: "Çok dikkatli davranıyor ama biraz gereksiz. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]
            }
        ]
    },
    {
        adi: "Abdullah",
        soyadi: "Çakarlambalı",
        aciklama: "Musteri Çok Ciddi, Hepsinin 1 Nisana kadar temizlenmesini istiyor. 50.000 Chf ödedi. 50.000 Chf iş bitiminde ödeyecek.",

        maktuller: [{
                adi: "Abdurrahman",
                soyadi: "sazielinde",
                kisiHakkindaBilgi: "Çok alakasiz davranıyor. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]
            },
            {
                adi: "Abdurrezzak",
                soyadi: "Rizikisteyen",
                kisiHakkindaBilgi: "Çok dikkatli davranmiyor ama kurnaz. Yanında emanet var. Korumalarıyla geziyor. Her gün Farklı adreslerde kalıyor.",
                durum: "yasiyor",
                adresler: [{
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    },
                    {
                        adres: "Bahar Mahallesi No:11 Güney izmir"
                    }
                ]
            }
        ]
    }
]


let musteriListesiBolumu = document.getElementById("musteri_listesi_id")
let secilenMusterininListesiBolumu = document.getElementById("hedef_kisiler_id")
let maktullerinAdresleri = document.getElementById("adres_listesi")

function saveLocalStorage() {
    // musteriListesi.push(item)
    localStorage.setItem("musteriListesi", JSON.stringify(musteriListesi))
}

function saveLocalItems() {
    localStorage.setItem("yeniListe", JSON.stringify(items = localdenAl()))
}
//localStorage
function localdenAl() {

    musteriListesi = JSON.parse(localStorage.getItem("musteriListesi"));
    return musteriListesi
}