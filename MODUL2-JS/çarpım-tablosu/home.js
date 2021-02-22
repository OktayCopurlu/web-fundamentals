//seçilen öğrenci bilgilerini çalışma sayfasına yazdırma.
function calismaBaslat(pEvent) {
    puanArray.filter(eleman => {
        if (pEvent.target.id == eleman.adi.ogrenciAdi) {
            hangiOgrenci.innerHTML = `
                <span id="${eleman.adi.ogrenciSoyadi}">${eleman.adi.ogrenciAdi + "  " + eleman.adi.ogrenciSoyadi + "  : "}</span>
                <button id="bitir">Bitir</button>
                `
            counter = 0;
            yazdir()
        }
    })
}


//öğrenci listesi arrayını html e yazdırma...
function ogrenciListesiniYazdir() {
    localdenAl()

    cocuklar.innerHTML = "";
    return puanArray.map((eleman, index) => {
        cocuklar.innerHTML += `
        <div id="${index}">
        <span>${eleman.adi.ogrenciAdi}</span>
        <span>${eleman.adi.ogrenciSoyadi}</span>
        <span>${puan}</span>
        <button id="${eleman.adi.ogrenciAdi}">Çalışmaya Başla</button>
        </div>`
    }).join("");
}

//localStorage
function localdenAl() {
    if (localStorage.getItem("puanArray") === null) {
        puanArray = [];
    } else {
        puanArray = JSON.parse(localStorage.getItem("puanArray"));
    }
    return puanArray
}

function saveLocalStorage(item) {
    puanArray = localdenAl()
    puanArray.push(item)
    localStorage.setItem("puanArray", JSON.stringify(puanArray))
}