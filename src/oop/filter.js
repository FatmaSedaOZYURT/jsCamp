//Filter yeni bir array oluşturur.
//StateManagement
//Data değiştiğinde ekran yenileniyor.
//Render edildiğinde referans değişir. O yüzden filter referansı değiştirir.
//Filter, yeni bir array oluşturur.
//Aşağıdaki olan örnekte unitPrice ı 12000 den fazla olan nesneleri ekler.

let products = [
    {id:1, name : "Acer Laptop", unitPrice: 15000},
    {id:2, name : "Asus Laptop", unitPrice: 16000},
    {id:3, name : "Hp Laptop", unitPrice: 13000},
    {id:4, name : "Dell Laptop", unitPrice: 12000},
    {id:5, name : "Casper Laptop", unitPrice: 17000}
];

let filteredProducts = products.filter(product=>product.unitPrice>12000);
console.log(filteredProducts);

