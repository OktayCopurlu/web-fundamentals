//ögrenci nesnesi oluşturma.
function createStudent() {
    student = {
        isim: `${inputIsim.value}`,
        soyad: `${inputSoyad.value}`,
        yas: `${inputYas.value}`
    };
    return student;
}

//ögrenci nesnesini eklenen öğrenciler arrayina gönderme...
function pushStudentToArray() {
    return eklenenOGrenciler.push(createStudent());
}

//öğrencileri arraydan alip tablo içine aktarma....
function addStudent() {
    return eklenenOGrenciler.map((i, index) => {
        liste.innerHTML += `
        <tr id="${index}">
        <td>${i.isim}</td>
        <td>${i.soyad}</td>
        <td>${i.yas}</td>
        <td><button class="btn btn-danger" id="silme-button">Sil</button></td>
        </tr>`
    }).join("");
}

//inputları doldurup öğrenciyi öğrenciyi ekrana yazdırma...
eklemeButton.addEventListener("click", () => {
    if (inputIsim.value != "" && inputSoyad.value != "" && inputYas.value != "") {
        pushStudentToArray();
        remoreInput();
        addStudent();
        refresh()
    } else {
        alert("Bilgileri Doğru Giriniz...")
    }
});

//öğrenci ekleme butonuna bastiktan sonra input içini boşaltma...
function remoreInput() {
    liste.innerHTML = "";
    inputIsim.value = "";
    inputSoyad.value = "";
    inputYas.value = "";
}

//öğrenci silme işlemi...
table.addEventListener("click", function(pEvent) {
    if (pEvent.target.id == 'silme-button') {
        pEvent.target.parentElement.parentElement.remove();
        eklenenOGrenciler.splice(pEvent, 1);
    }
    refresh()
})

//ekleme ve silme işleminden sonra öğrenci sayisini güncelleme...
function refresh() {
    document.querySelector("#ogrenci-sayisi").innerHTML = "Ögrenci Sayisi             :  " + eklenenOGrenciler.length;
}