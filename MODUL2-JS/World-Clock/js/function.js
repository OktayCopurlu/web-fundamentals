//Tokyo saati....
function tokyoSaatiGoster() {

    let dateTime = new Date().toLocaleString("en-UK", { timeZone: "Asia/Tokyo" });
    dateTime = new Date(dateTime);
    saat = dateTime.getHours();
    dakika = dateTime.getMinutes();
    saniye = dateTime.getSeconds();
    sifirEkle()
    let tokyoSaati = document.getElementById('digital').innerHTML = saat + ":" + dakika + ":" + saniye;

    return tokyoSaati
}

// new york saati....
function newYorkSaatiGoster() {

    let dateTime = new Date().toLocaleString("en-UK", { timeZone: "america/new_york" });
    dateTime = new Date(dateTime);
    saat = dateTime.getHours();
    dakika = dateTime.getMinutes();
    saniye = dateTime.getSeconds();
    sifirEkle()
    let neWSaatiGoster = document.getElementById('digital').innerHTML = saat + ":" + dakika + ":" + saniye;

    return neWSaatiGoster
}

//zürich saati....
function zurichSaatiGoster() {

    let dateTime = new Date().toLocaleString("en-UK", { timeZone: "Europe/Vienna" });
    dateTime = new Date(dateTime);
    saat = dateTime.getHours();
    dakika = dateTime.getMinutes();
    saniye = dateTime.getSeconds();
    sifirEkle()
    let zurichSaatiGoster = document.getElementById('digital').innerHTML = saat + ":" + dakika + ":" + saniye;

    return zurichSaatiGoster
}


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