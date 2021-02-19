function arrayaOgrenciEkle() {
    if ((ogrenciAdi.value != "") && (ogrenciSoyadi.value != "")) {
        puanArray.push(createStudent())
        ogrenciListesiniYazdir()
    } else {
        alert("Lütfen bilgileri girin")
    }
    ogrenciAdi.value = "";
    ogrenciSoyadi.value = "";
}


function calismaSayfası() {

    yazdir()
}

//çalışma sayfasını html e yazdırma..
function yazdir() {
    let soru = soruyuGetir(counter)

    return sayilarinDivi.innerHTML = `
    <span id="ilk_sayi" style="color:red">${counter + 1}. Soru  : </span>
    <span id="ilk_sayi">${soru.sayi1} X </span>
    <span id="ikinci_sayi">${soru.sayi2} = </span>
    <input id="input"= type="text">
    <button id="kontrol">Kontrol</button>
    `
}
let toplam = "";


//random sayı üretmeyi çalıştırıyor... 
function soruOlustur() {
    let sayi1 = Math.floor(Math.random() * 10);
    let sayi2 = Math.floor(Math.random() * 10);
    toplam = sayi1 * sayi2
    let soru = {
        sayi1: `${sayi1}`,
        sayi2: `${sayi2}`,
        toplam: `${toplam}`
    }

    return soru
}
//öğrenci sonucu girmesi için buton... kontrol butuno çalışıyor
function sonucAl(pEvent) {

    let inputValue = document.querySelector("#input").value
    if ((pEvent.target.id == "kontrol") && (inputValue != "")) {
        counter++
        toplamCevap += 1
        if (inputValue == toplam) {
            puan += 10
        }
        inputValue = "";
        yazdir()
        oyunuSonlandir()

    }
}

//sorular arrayına 10 tane soru ekleyen func.
function arrayaSoruEkle() {
    let sorular = [];
    for (let index = 0; index < 10; index++) {
        sorular.push(soruOlustur())
    }
    return sorular
}

function soruyuGetir(pIndex) {
    const sorular = arrayaSoruEkle()
    return sorular[pIndex]
}

//son soru cevaplanınca oyun kapanıyor.
function oyunuSonlandir() {
    if (counter == 9) {
        window.location.reload()
    }
}

function soruyuDegistir() {
    setInterval(() => {
        let timeCounter = 0;
        timeCounter++
        %
        (timeCounter * 10)
        if (timeCounter == 10) {
            soruyuGetir()

        }
    }, 1000)
}