//Destructuring
//Elinizdeki array in değerilerini bir değişkene  atamaktır.
//Parçalamak demektir.
let populations = [10000, 20000, 30000, [40000, 50000]];
// let [small, medium, high, veryHigh, maximum] = populations;
let [small, medium, high, [veryHigh, maximum]] = populations;
// console.log(small);
// console.log(medium);
// console.log(high);
// console.log(veryHigh);
// console.log(maximum);


//Bu fonksiyonun parametresi destructuring olarak düşünülmelidir.
//İlk değer bir array olacak ve bu arrayin ilk değerini smaill1 e atacağım demek oluyor
function someFunction([small1], number) {
    console.log(small1);
}
//Bu şekilde, parametresiz fonksiyonu çağırırsak, javascript hata verir.
//Çünkü, bu fonksiyonun parametresinde bir array isteyerek parametreyi zorunlu hale getirdik.
// someFunction()

someFunction(populations)

let category = { id : 1, name :"İçecek"};

console.log(category.id)
console.log(category["name"]);

let {id, name} = category
console.log(id)
console.log(name)


let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri, marmaraSehirleri]] = [
    {name:"İç Anadolu", populations: "20M"},
    {name:"Marmara", populations: "30M"},
    {name:"Karadeniz", populations: "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"]
    ]
];

console.log(icAnadoluSehirleri);


// let {productName: productNAME, unitPrice: unitPRICE, quantity: quantity} = {productName : "Elma", unitPrice : 10, quantity:5}

// console.log(productNAME);
// console.log(unitPRICE);
// console.log(quantity);

let productNAME,unitPRICE, newQuantity
({productName: productNAME, unitPrice: unitPRICE, quantity: newQuantity} = {productName : "Elma", unitPrice : 10, quantity:5})

console.log(productNAME);
console.log(unitPRICE);
console.log(newQuantity);

