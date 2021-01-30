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