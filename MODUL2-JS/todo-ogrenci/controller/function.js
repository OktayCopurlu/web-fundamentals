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