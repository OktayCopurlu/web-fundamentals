const doldurButton = document.getElementById("doldurma");
const bosaltButton = document.getElementById("bosaltma");
let ilkKademe = document.getElementById("az_doluluk");
let ikinciKademe = document.getElementById("orta_doluluk");
let fullKademe = document.getElementById("full")

doldurButton.addEventListener("click", doldur);
bosaltButton.addEventListener("click", bosalt);

let pillDolumSayaci = 0;


//Doldurma fonksiyonu

function doldur() {

    if (pillDolumSayaci < 3) {
        pillDolumSayaci = pillDolumSayaci + 1
    }

    if (pillDolumSayaci == 0) {
        ilkKademe.style["background-color"] = "white";

    } else if (pillDolumSayaci == 1) {
        ilkKademe.style["background-color"] = "red";

    } else if (pillDolumSayaci == 2) {
        ilkKademe.style["background-color"] = "orange";
        ikinciKademe.style["background-color"] = "orange";

    } else {
        ilkKademe.style["background-color"] = "green";
        ikinciKademe.style["background-color"] = "green";
        fullKademe.style["background-color"] = "green";
    }
    return
}

//Boşaltma fonksiyonu

function bosalt() {

    if (pillDolumSayaci > 0) {
        pillDolumSayaci = pillDolumSayaci - 1
    }

    if (pillDolumSayaci == 0) {
        ilkKademe.style["background-color"] = "white";

    } else if (pillDolumSayaci == 1) {
        ilkKademe.style["background-color"] = "red";
        ikinciKademe.style["background-color"] = "white";
        fullKademe.style["background-color"] = "white";

    } else if (pillDolumSayaci == 2) {
        ilkKademe.style["background-color"] = "orange";
        ikinciKademe.style["background-color"] = "orange";
        fullKademe.style["background-color"] = "white";

    } else {
        ilkKademe.style["background-color"] = "green";
        ikinciKademe.style["background-color"] = "green";
        fullKademe.style["background-color"] = "green";
    }
    return
}