function saatCalistir() {

    let zaman = new Date();

    saat = zaman.getHours();
    dakika = zaman.getMinutes();
    saniye = zaman.getSeconds();
}

function tokyoSaatiGoster() {
    saatCalistir()
    sifirEkle()

    let tokyoSaati = document.getElementById('digital').innerHTML = tokyo + ":" + dakika + ":" + saniye;
    return tokyoSaati
}

// new york saati....
function newYorkSaatiGoster() {
    saatCalistir()
    sifirEkle()

    let neWSaatiGoster = document.getElementById('digital').innerHTML = newYork + ":" + dakika + ":" + saniye;

    return neWSaatiGoster
}


//zürich saati....
function zurichSaatiGoster() {

    saatCalistir()
    sifirEkle()

    let zurichSaatiGoster = document.getElementById('digital').innerHTML = saat + ":" + dakika + ":" + saniye;

    return zurichSaatiGoster
}


// ana fonksiyon; saatleri çalıştırma ve durdurma fonksiyonu...
ulkeler.addEventListener("click", function(pEvent) {

    clearInterval(tokyoCalisiyor);
    clearInterval(newYorkCalisiyor);
    clearInterval(zuricCalisiyor);

    if (pEvent.target.id == "zurich") {
        zuricCalisiyor = setInterval(zurichSaatiGoster, 1000);
    } else if (pEvent.target.id == "newYork") {
        newYorkCalisiyor = setInterval(newYorkSaatiGoster, 1000);
    } else if (pEvent.target.id == "tokyo") {
        tokyoCalisiyor = setInterval(tokyoSaatiGoster, 1000);
    }
});

// 10 dan küçük dakika ve saniyelere 0 sıfır ekleme...
function sifirEkle() {

    if (saniye < 10) {
        saniye = "0" + saniye;
    }
    if (dakika < 10) {
        dakika = "0" + dakika;
    }
    if (saat < 10) {
        saat = "0" + saat;
    }
}