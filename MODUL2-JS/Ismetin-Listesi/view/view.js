//program ilk açıldığında müşteri listesi ekranda gösteren fonc.
function musteriListesiniEkranaYazir() {

    musteriListesi.map((eleman) => {
        musteriListesiBolumu.innerHTML += `
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${eleman.adi}   ${eleman.soyadi}</h5>
                        <p class="card-text">${eleman.aciklama}</p>
                        <a href="#" id="${eleman.adi}" class="btn btn-primary">Musterinin Listesini Gor</a>
                    </div>
                </div>
            </div>
        `
    }).join('')
}

musteriListesiniEkranaYazir()

//müşterinin istek listesini açmak için fonksiyon
musteriListesiBolumu.addEventListener("click",
    function musterininIstekleri(pEvent) {


        secilenMusterininListesiBolumu.innerHTML = "";
        musteriListesi.map(eleman => {
            if (pEvent.target.id == eleman.adi) {
                eleman.maktuller.forEach((eleman) => {
                    return secilenMusterininListesiBolumu.innerHTML += `            
                    <div class="col-sm-3">
                        <div id="${eleman.kisiHakkindaBilgi}" class="card">
                            <div class="card-body ">
                                <h5 class="card-title ">${eleman.adi}  ${eleman.soyadi}</h5>
                                <p class="card-text ">${eleman.kisiHakkindaBilgi}</p>
                                <a href="#" id="${eleman.adi}" class="btn btn-primary">Adres Listesi</a>
                                <a href="#" id="${eleman.soyadi}" class="btn btn-danger" style ="">Temizlendi</a>
                            </div>
                        </div>
                    </div>`
                })
            }
        })
    }
)

//maktul adresleri fonksiyonu
secilenMusterininListesiBolumu.addEventListener("click",
    function adresListesi(pEvent) {
        saveLocalStorage()
        maktullerinAdresleri.innerHTML = `<h1>Adresler...</h1>`;
        musteriListesi.map((element) => {
            element.maktuller.map((maktul) => {
                if (pEvent.target.id == maktul.adi) {
                    maktul.adresler.forEach(eleman => {

                        return maktullerinAdresleri.innerHTML += `
                        <div class="adresler ">
                            <a href="https://www.google.com/maps/place/Z%C3%BCrih/@47.3774337,8.4666753,12z/data=!3m1!4b1!4m5!3m4!1s0x47900b9749bea219:0xe66e8df1e71fdc03!8m2!3d47.3768484!4d8.5416985 " target="_blank">
                            ${eleman.adres}
                            </a> 
                        </div>`
                    })
                }
            })
        })
    }
)


//maktul temizlendikten sonra üstünü karartmak
secilenMusterininListesiBolumu.addEventListener("click",
    function maktulDurumDegistir(pEvent) {
        musteriListesi.map((element) => {
            element.maktuller.map((maktul) => {
                if (pEvent.target.id == maktul.soyadi) {
                    maktul.durum = "temizlendi"
                    saveLocalStorage()
                    localdenAl()
                    styleDegistir()
                }
            })
        })
    }
)


function styleDegistir() {
    musteriListesi.map((element) => {
        element.maktuller.map((maktul) => {
            if (maktul.durum == "temizlendi") {
                document.getElementById(maktul.kisiHakkindaBilgi).style = "background-color:rgb(59, 58, 58);";
            }
        })
    })
}
styleDegistir()