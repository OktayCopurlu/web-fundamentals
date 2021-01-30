// ana fonksiyon; saatleri çalıştırma fonksiyonu...
sehirler.addEventListener("click", function(pEvent) {
    saatiDurdur()

    if (pEvent.target.id == "zurich") {
        zuricCalisiyor = setInterval(zurichSaatiGoster, 1000);
        baslik.innerHTML = "Zurich Saati"
    } else if (pEvent.target.id == "newYork") {
        newYorkCalisiyor = setInterval(newYorkSaatiGoster, 1000);
        baslik.innerHTML = "New York Saati"
    } else if (pEvent.target.id == "tokyo") {
        tokyoCalisiyor = setInterval(tokyoSaatiGoster, 1000);
        baslik.innerHTML = "Tokyo Saati"
    }

});

//saatleri durdurma fonksiyonu
function saatiDurdur() {
    clearInterval(tokyoCalisiyor);
    clearInterval(newYorkCalisiyor);
    clearInterval(zuricCalisiyor);
}

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