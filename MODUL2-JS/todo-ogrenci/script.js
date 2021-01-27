const form = document.querySelector('form');
const input = document.querySelector('#ogrenciIsmi');
const input2 = document.querySelector('#ogrenciSyd');
const input3 = document.querySelector('#ogrenciYas');


let button = document.querySelector(".btn-primary")
let tbody = document.querySelector(".tbody")
let table = document.querySelector(".table")

let liste = document.querySelector("#eklenenOgrenciler")

let eklenenOGrenciler = ["oktay", "çopurlu", "28"];

function addItems() {

    let student = {

        Isım: `${input.value}`,
        Soyad: `${input2.value}`,
        Yas: `${input3.value}`
    }
    alert(student.Isım)
    return eklenenOGrenciler.push(student);
}


button.addEventListener('click', addItems)

function elemanEkle(pListe) {

    pListe.map((element, index) => {
        return `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element.pIsım}</td>
        <td>${element.pSoyad}</td>
        <td>${element.pYas}</td>
    </tr>`
    })

}

function createTablo() {
    return `
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Öğrencinin Adı</th>
            <th scope="col">Öğrencinin Soyadı</th>
            <th scope="col">Öğrencinin Yaşı</th>
        </tr>
    </thead>

    `
}

table.innerHTML = createTablo();

liste.innerHTML = elemanEkle(eklenenOGrenciler);

alert(eklenenOGrenciler)