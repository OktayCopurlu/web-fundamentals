//ana ürün listesi ekranda gösterme...
function tabloElemanlari() {
    productList.map((item) => {
        tableHead.innerHTML +=
            `<tbody id="tbody">
        <tr>
        <td>${item.productName}</td>
        <td>${item.price}</td>
        <td>${item.expireDate.getFullYear()}</td>
        <td><img src="${item.productImage}"</img></td>
        <td>${item.totalCalories}</td>
        <td><button class="btn btn-primary" id="${item.productName}">Buy</button></td>
    </tr> 
    </tbody>`
    }).join('')

    return
}
tabloElemanlari()

//sepet elemanlarını ekranda gösterme...
function sepetElemanlariGoster() {
    shoppingList.map((item) => {

        sepetListe.innerHTML +=
            `<tbody id="tbody-sepet">
            <tr>
                <td>${item.productName}</td>
                <td>${item.price}</td>
                <td><img src="${item.productImage}"</img></td>
                <td><button class="btn btn-danger" id="${item.productName}">Sil</button></td>
            </tr> 
            </tbody>`
    }).join('')
    return
}