/* Bu haftaki programlama ödevimizde bir ciftciye yardim edecegiz. Ciftcimiz anlasmali oldugu kelle pacaci Necip Ustaya 
gercek zamanli istatistik vermek istiyor. Gayet müslüman olan Necip Usta ise, sordugu anda kac tane hayvan bacagi oldugu bilgisini 
almak istiyor.

Program: 
Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:

Array örnegi: [“inek”, “inek”, “tavuk”, “domuz”, “inek”, "koyun"]
Yapacaginiz program verilen array üzerinden kullanilabilir hayvan bacagi sayisini bulacak ve ekrana bastiracak.*/

let ciftliktekiHayvanlar=["inek", "inek", "tavuk", "domuz", "inek", "koyun"];
let hayvanBacakSayisi=0;
for (index=0; index < ciftliktekiHayvanlar.length; index++){
    if(ciftliktekiHayvanlar[index] == "inek" || ciftliktekiHayvanlar[index] == "domuz" || ciftliktekiHayvanlar[index] == "koyun" ){
        hayvanBacakSayisi += 4
    }else if(ciftliktekiHayvanlar[index] == "tavuk"){
        hayvanBacakSayisi += 2
    }
}
console.log(hayvanBacakSayisi);