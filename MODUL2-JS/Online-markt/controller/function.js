//total fiyatı hesaplama... 
function totalFiyatAl() {
    let totalFiyat = 0;
    shoppingList.map(item => {
        totalFiyat += item.price
    })
    return sepetTotalFiyat.innerHTML = "Toplam Fiyat  = " + totalFiyat
}

//seçilen ürünü sepet arrayına gönderme...
function createShoppingList(pEvent) {
    productList.filter(product => {
        if (pEvent.target.id === product.productName) {
            shoppingList.push(product);
            sepetListe.innerHTML = `<thead>
            <tr>
                <th scope="col "> Name </th>
                <th scope="col "> Fiyat </th>
                <th scope="col "> Product </th>
                <th scope="col "> Sil</th>
            </tr>
        </thead>`;
            totalFiyatAl()
        }
    }).join('')
    sepetElemanlariGoster()
    return
}


//sepetten ürün silme...
function sepettenSil(pEvent) {

    if (pEvent.target.className == "btn btn-danger") {
        pEvent.target.parentElement.parentElement.remove();
        shoppingList.filter((product, index) => {
            if (pEvent.target.id === product.productName) {
                delete shoppingList[index]
                console.log(index)
            }
        })
    }
    totalFiyatAl()
}

tableHead.addEventListener("click", createShoppingList) //sepete eklemek için click
sepetListe.addEventListener("click", sepettenSil) // sepetten silmek için click