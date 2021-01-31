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
let neresiTokyo = document.querySelector("#tokyo").value;
let neresiNewYork = document.querySelector("#newYork").value;
let neresiZurich = document.querySelector("#zurich").value;
let sehirler = document.querySelector("#sehirler")
let timeZones = "Europe/Vienna";