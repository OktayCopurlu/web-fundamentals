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

//çalışma sayfasını html e yazdırma..
function yazdir() {
    sayi1 = Math.floor(Math.random() * 10);
    sayi2 = Math.floor(Math.random() * 10);
    toplam = sayi1 * sayi2;
    let soru = {
        sayi1: `${sayi1}`,
        sayi2: `${sayi2}`,
        toplam: `${toplam}`
    }
    return sayilarinDivi.innerHTML = `
    <span id="ilk_sayi" style="color:red">${counter + 1}. Soru  : </span>
    <span id="ilk_sayi">${soru.sayi1} X </span>
    <span id="ikinci_sayi">${soru.sayi2} = </span>
    <input id="input"= type="text">
    <button id="kontrol">Kontrol</button>
    `
}

//öğrenci sonucu girmesi için buton... kontrol butuno çalışıyor
function sonucAl(pEvent) {
    let inputValue = document.querySelector("#input").value
    if ((pEvent.target.id == "kontrol") && (inputValue != "")) {

        counter++
        if (inputValue == toplam) {
            puan += 10
            ogrenciListesiniYazdir()

        }
        inputValue = "";
        yazdir()
        oyunuSonlandir()
    }
}

function oyunuBitir(pEvent) {
    puanArray.filter(eleman => {

        if (pEvent.target.id == "bitir") {
            eleman.adi.puan = puan
            ogrenciListesiniYazdir()

            sayilarinDivi.innerHTML = "";
            hangiOgrenci.innerHTML = "";
        }
    })
}


//son soru cevaplanınca oyun kapanıyor.
function oyunuSonlandir() {
    if (counter == 9) {
        sayilarinDivi.innerHTML = "";
        counter = 0;
    }
}

function createStudent() {
    let toplam = puan
    student = {
        adi: {
            ogrenciAdi: `${ogrenciAdi.value}`,
            ogrenciSoyadi: `${ogrenciSoyadi.value}`,
            puan: `${toplam}`
        }
    };

    cocuklar.innerHTML = "";
    return saveLocalStorage(student);
}