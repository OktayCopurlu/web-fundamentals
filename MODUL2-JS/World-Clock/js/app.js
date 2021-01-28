/**
 * Dünya genelinde 3 şehrin saatini gösteren program.
 * Her şehre Tıklandığında şehrin saati doğru olarak gösterilmeli.
 * Ekranda çalışan saatin hangi şehire ait olduğu gösterilmeli.
 * saat aktif çalışıyor olmalı, setinterval kullanarak her saniye yenilenebilir.
 * gösterilmek istenen şehir seçildiğinde diğer iki şehrin yenilenmesi clearInterval ile durulmalı.
 * saat - dakika - saniye değerleri 10 dan küçük olduğunda yanlarına "0" sıfır eklenmeli.
 * 
 */

let baslik = document.querySelector("h1")
let neresiTokyo = document.querySelector("#tokyo");
let neresiNewYork = document.querySelector("#newYork");
let neresiZurich = document.querySelector("#zurich");
let sehirler = document.querySelector("#sehirler")


let newYorkCalisiyor = null;
let zuricCalisiyor = null;
let tokyoCalisiyor = null;