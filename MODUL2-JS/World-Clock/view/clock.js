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