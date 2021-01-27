let form = document.querySelector('form');
let button = document.querySelector("#btnAddNewTask");
let tbody = document.querySelector(".tbody");
let table = document.querySelector("#table");
let liste = document.querySelector("#eklenenOgrenciler");
let input1 = document.querySelector('#ogrenciIsmi');
let input2 = document.querySelector('#ogrenciSyd');
let input3 = document.querySelector('#ogrenciYas');
let eklenenOGrenciler = [];

let student = {
    isim: "",
    soyad: "",
    yas: ""
}

function createStudent() {
    student = {
        isim: `${input1.value}`,
        soyad: `${input2.value}`,
        yas: `${input3.value}`
    };

    return student;
}

function pushStudentToArray() {
    return eklenenOGrenciler.push(createStudent());
}




button.addEventListener("click", () => {

    if (input1.value != "" && input2.value != "" && input3.value != "") {

        pushStudentToArray();
        remoreInput();
        elemanEkle();

    } else {
        alert("Bilgileri Doğru Giriniz...")
    }
});


function remoreInput() {
    liste.innerHTML = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
}

function elemanEkle() {
    return eklenenOGrenciler.map((i, index) => {
        liste.innerHTML += `<tr>
       <th>${index + 1}</th>
        <td>${i.isim}</td>
        <td>${i.soyad}</td>
        <td>${i.yas}</td>
        <td><button id="fas-ttimes">Sil</button></td>
        </tr>`
    }).join("");
}

let deleteOgrenci = document.getElementById("#fas-ttimes")
let silinecek = document.querySelector("tr")

deleteOgrenci.addEventListener("click", )

liste.removeChild(silinecek)


/*
deleteOgrenci.addEventListener("click", (pEvent) => {
    if (pEvent.target.id == 'fas-ttimes') {
        alert("siliniyor")
        pEvent.target.parentElement.parentElement.remove();

    }
    e.preventDefault();
})*/