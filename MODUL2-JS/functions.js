function merhabaFonksiyonu() {
    console.log("node eski modul sistemi")
}

function guleguleFonksiyonu() {
    console.log("node eski modul sistemine GuleGule")
}

module.exports = {
    merhaba: merhabaFonksiyonu,
    gulegule: guleguleFonksiyonu
}