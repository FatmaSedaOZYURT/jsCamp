//Fonksiyonel parametre bu şekilde kullanılmaktadır.
console.log("1. Fonskiyon Kullanımı:");
function addToCart( quantity, productName="Elma") {
    console.log("Sepete Eklendi -> "+quantity+" adet " + productName);
}

addToCart("");
addToCart(2,"Armut");

console.log("2. Fonskiyon Kullanımı:");
let sayHello = () =>{
console.log("Hello Brother 👊");
};
sayHello();

console.log("3. Fonskiyon Kullanımı:");
let sayHello2 = function () {
    console.log("Hello Brothers 🤜🤛");
}
sayHello2();

//Fonksiyona nesne göndermek
function addToCart2(product) {
    console.log("Ürün Adı: " + product.Name);
    console.log("Ürün Fiyat: " + product.Fiyat);
    console.log("Ürün Adet: " + product.Adet);
}
let product1 = {
    Name : "Elma",
    Fiyat : 10,
    Adet : 50
}
addToCart2(product1);

/*****
 * Referans Tip ~ Referans Type - Heap
 * Burada product3'ün değişmesinin sebebi, product2'nin referans adresinin 
 * product3 ile aynı adresi göstermesidir.
 * Her ne kadar product2 değişmiş gibi görünse de product3 değişmiştir.
 * Bu durumda ilk product2 nin referans adresi ram de belli bir süre sonra kaybolacaktır.
 ******/
let product2 = {
    Name : "Karpuz",
    Fiyat : 100,
    Adet : 10
}
let product3 = {
    Name : "Karpuz",
    Fiyat : 100,
    Adet : 10
}
product2 = product3;
product2.Name="Kavun";
console.log(product3);



/****
 * Değer Tip ~ Value Type - Stack
 * Referans tip olmadığı için çıktı 20 olur.
 ****/

let sayi1 = 10, sayi2= 20;
sayi1 = sayi2;
sayi2 = 30;
console.log(sayi1);


function addToCart4(x) {
    console.log(products);
    //Burada x i aradı bulamadı. Böylelikle bir üst scope a baktı ve products ı buldu.
    //Bulduğu products ı bastı.
}

let products = [
    {Name : "Elma", Fiyat : 10, Adet : 50},
    {Name : "Elma1", Fiyat : 10, Adet : 50},
    {Name : "Elma2", Fiyat : 10, Adet : 50}
];

addToCart4(products);

function add (number1, number2){
    console.log(number1 + number2);
}

//Rest daima son parametre olmalıdır.
function add (...numbers){
    console.log(numbers.reduce((n, number)=> n + number, 0));
}

add(20,30,40);

