/**
 * Raziye hanım için online satış programı
 * Programda ürün listesi sayfanın sol tarafında olacak.
 * - ürünlerin yanında sepete ekle butonu olmalı.
 * - sepete ekle butonuna basıldığında ürünler sağ tarafa eklenmeli.
 *
 * Satın alınan ürünler ise sağ tarafa sepete eklenecek.
 * - eklenen her ürünün fiyatı toplam fiyata dahil edilmeli.
 * -
 * Gerektiğinde satın alınan ürünler sepetten çıkartılacak.
 * - ürünlerin yanında sil butonu olmalı
 * - sil butonuna basılınca ürünler sepetten silinmeli
 * - silinen ürünün fiyatı toplam fiyatta olmamalı.
 * Sepetin en altında ise toplam satış fiyatı güncel bir şekilde gösterilecek
 * - ürünü sil butonuna basıldığında ürün sepetten çıkartılmalı.
 * - Ödeme yap butonu olmalı.
 * - ödeme yap butonuna basılınca ürünler başarıyla satın alındı alerti açılmalı.
 * -
 *
 */
const productList = [{
        productName: "Aprikosen",
        price: 7.90,
        expireDate: new Date(2021, 11, 12),
        productImage: "https://image.migros.ch/product-zoom/47c42ac7c3f96779711c07b4e887fa314f7d3118/extra-konfituere-aprikosen.jpg",
        totalCalories: 460,
    },
    {
        productName: "Waldbeeren",
        price: 5.20,
        expireDate: new Date(2021, 3, 19),
        productImage: "https://image.migros.ch/product-zoom/b1efd55d4b123bdfdb9e5dd644aed4a472a52e21/favorit-konfituere-waldbeeren.jpg",
        totalCalories: 240
    },
    {
        productName: "Hagenbutten",
        price: 3.10,
        expireDate: new Date(2021, 5, 15),
        productImage: "https://image.migros.ch/product-zoom/7155c76b6f1134f6a57795ded7c1fb8c80953cf7/extra-konfituere-hagenbutten.jpg",
        totalCalories: 300
    },
    {
        productName: "Himbeeren",
        price: 10,
        expireDate: new Date(2021, 8, 17),
        productImage: "https://image.migros.ch/product-zoom/fb3e595303aa4bb287c274b6b0bc7e7c020f80e7/extra-konfituere-himbeeren.jpg",
        totalCalories: 600
    },
    {
        productName: "Kirschen",
        price: 13.70,
        expireDate: new Date(2021, 10, 11),
        productImage: "https://image.migros.ch/product-zoom/2d4a9cc209dcb269be4b805fbf139207c78dc8a4/favorit-konfituere-schwarze-kirschen.jpg",
        totalCalories: 125,
    },
    {
        productName: "Orangen",
        price: 8.90,
        expireDate: new Date(2021, 6, 18),
        productImage: "https://image.migros.ch/product-zoom/cfb4e6683236afcefe918e3e5c273dfb2718ea64/extra-marmelade-bitterorangen.jpg",
        totalCalories: 150
    },
    {
        productName: "Erdbeeren",
        price: 11.90,
        expireDate: new Date(2021, 10, 1),
        productImage: "https://image.migros.ch/product-zoom/c88b57754e8e31309bf45015a0535ed59c05e02c/m-budget-konfituere-erdbeer.jpg",
        totalCalories: 222
    },
    {
        productName: "Erdbeer Extra",
        price: 4.80,
        expireDate: new Date(2021, 2, 14),
        productImage: "https://image.migros.ch/product-zoom/36b67f0227f055314b9ace8fe2daa24e2279c079/extra-konfituere-erdbeeren.jpg",
        totalCalories: 333
    },
    {
        productName: "Erdbeer Klein",
        price: 19.50,
        expireDate: new Date(2021, 0, 1),
        productImage: "https://image.migros.ch/product-zoom/023deb389cae5f7f523d2560f5f90f0ee49b8f38/favorit-konfituere-erdbeeren.jpg",
        totalCalories: 250
    }
];

//const form = document.querySelector('form');
//const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

function eventListeners() {
    // submit event
    //form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItems() {
    productList.forEach(function(item) {
        createItem(item);
    })
}

function createItem(text) {
    // create li
    const span = document.createElement('li');
    span.className = 'list-group-item list-group-item-secondary';
    span.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

}
// delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {

        e.target.parentElement.parentElement.remove();

    }
    e.preventDefault();
}
/*
const taskList = document.querySelector('.sil');

let aprikosen = document.querySelector("#aprikosen-receli")
aprikosen.addEventListener("click", sepeteAprikosenAt);

function eventListeners() {
   // submit event
   form.addEventListener('submit', addNewItem);

   // delete an item
   taskList.addEventListener('click', deleteItem);

   // delete all items
   btnDeleteAll.addEventListener('click', deleteAllItems);
}


function sepeteAprikosenAt() {
   document.querySelector("#newDiv").appendChild(aprikosen);
   return
}


let elmaReceli = document.querySelector("#elma-receli")
elmaReceli.addEventListener("click", sepeteElmaReceliAt);

function sepeteElmaReceliAt() {
   document.querySelector("#newDiv").appendChild(elmaReceli);
   return
}


//delete an item
function deleteItem(e) {
   if (e.target.className === 'sil') {
       e.target.parentElement.remove();
   }
   e.preventDefault();
}