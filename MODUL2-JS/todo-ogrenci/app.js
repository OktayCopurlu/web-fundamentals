/**
 * bir öğrenci kayit sistemi oluşturulacak...
 * kayıt ekranında öğrenci adı - soyadı - yaşı bilgileri alınacak.
 * eklenen öğrenciler bir listede gösterilecek.
 * gerektiğinde öğrencinin kayıdı silinecek.
 * listenin en altında toplam öğrenci sayısı gösterilecek.
 * 
 * bir form/input aracılığı ile öğrenci bilgileri alınmalı,
 * alınan bilgiler oluşturulacak boş array a atılmalı,
 * aray içindeki bilgiler ekle butonuna basıldığında öprenci listesine yazdırılmalı.
 * eklenen her öğrencinin yanında kayıt silme butonu olmalı.
 * sil butonuna basıldığında öğrenci hem index sayfasından hem arraydan silinmeli.
 * toplam öğrenci sayısı öğrenci eklendiğinde artmalı. silindiğinde eksilmeli.
 * herhangi bir input boş iken ekle butonuna basıldığında "bilgileri doğru giriniz" uyarısı verilmeli.
 * bilgiler doğru alınıp kayıt edildikten sonra input içerikleri boşaltılmalı.
 * 
 */

let form = document.querySelector('form');
let eklemeButton = document.querySelector("#btnAddNewTask");
let tbody = document.querySelector(".tbody");
let table = document.querySelector("#table");
let liste = document.querySelector("#eklenenOgrenciler");

let inputIsim = document.querySelector('#ogrenciIsmi');
let inputSoyad = document.querySelector('#ogrenciSyd');
let inputYas = document.querySelector('#ogrenciYas');

let eklenenOGrenciler = [];
let ogrenciSayisi = 0;
let student = {
    isim: "",
    soyad: "",
    yas: ""
}