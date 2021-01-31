// ana fonksiyon; saatleri çalıştırma fonksiyonu...


sehirler.addEventListener("click", function(pEvent) {
    timeZones = pEvent.target.value
    if (pEvent.target.id == "zurich") {
        baslik.innerHTML = "Zurich Saati"
    } else if (pEvent.target.id == "newYork") {
        baslik.innerHTML = "New York Saati"
    } else if (pEvent.target.id == "tokyo") {
        baslik.innerHTML = "Tokyo Saati"
    }
});


setInterval(function() {
    tokyoSaatiGoster()
}, 1000)


function tokyoSaatiGoster() {

    let dateTime = new Date().toLocaleString("en-UK", { timeZone: timeZones });
    dateTime = new Date(dateTime);
    saat = dateTime.getHours();
    dakika = dateTime.getMinutes();
    saniye = dateTime.getSeconds();
    sifirEkle()
    let Saati = document.getElementById('digital').innerHTML = saat + ":" + dakika + ":" + saniye;

    return Saati
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