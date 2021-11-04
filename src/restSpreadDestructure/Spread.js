// React
//rest parameters
function showProduct(id, ...products) {
    console.log(id);
    console.log(products);
}
//...products bir array dir.
// console.log(typeof showProduct);
// showProduct(10, "Elma", "Armut", "Karpuz");
// showProduct(10, ["Elma", "Armut", "Karpuz"]);//array içinde array

//spread
let arrayNumber = [1,4,5,7,23,45,67,89];
console.log(Math.max(...arrayNumber))
console.log("ABC", "D", "EFG", "H")
console.log(..."ABC", "D", ..."EFG", "H")