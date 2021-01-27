let neresiTokyo = document.querySelector("#tokyo");
let neresiNewYork = document.querySelector("#newYork");
let neresiZurich = document.querySelector("#zurich");
let ulkeler = document.querySelector("#ulkeler")


let newYorkCalisiyor = null;
let zuricCalisiyor = null;
let tokyoCalisiyor = null;

let saat = null;
let dakika = null;
let saniye = null;

// tokyo ve new york saat farklarını ayarlama... 
let tokyo = null;
let newYork = null;

let tokyoSaatFarki = 8;
let newYorkSaatFarki = 18;

let tokyoSaat = saat + tokyoSaatFarki;
let newYorkSaat = saat + newYorkSaatFarki;

tokyo = tokyoSaat % 24;
newYork = newYorkSaat % 24;


// 10 dan küçük saatlere 0 sıfır ekleme..
if (tokyo < 10) {
    tokyo = "0" + tokyo;
}

if (newYork < 10) {
    newYork = "0" + newYork;
}