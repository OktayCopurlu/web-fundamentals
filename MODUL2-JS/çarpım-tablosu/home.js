//seçilen öğrenci bilgilerini çalışma sayfasına yazdırma.
function calismaBaslat(pEvent) {
    puanArray.filter(eleman => {
        if (pEvent.target.id == eleman.ogrenciAdi) {
            hangiOgrenci.innerHTML = `
                <span id="${eleman.ogrenciSoyadi}">${eleman.ogrenciAdi + "  " + eleman.ogrenciSoyadi + "  : " + puan}</span>
                `
            calismaSayfası()
        }
    })
}

//öğrenci listesi arrayını html e yazdırma...
function ogrenciListesiniYazdir() {
    return puanArray.map((eleman, index) => {
        cocuklar.innerHTML += `
        <div id="${index}">
        <span>${eleman.ogrenciAdi}</span>
        <span>${eleman.ogrenciSoyadi}</span>
        <span>${puan}</span>
        <button id="${eleman.ogrenciAdi}">Çalışmaya Başla</button>
        </div>`
    }).join("");
}