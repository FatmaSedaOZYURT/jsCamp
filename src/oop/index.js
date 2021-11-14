//public keyword ü javascipt'te export'tur.
class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}
let customer = new Customer(1, "232");

//Yukarıdaki nesneye ulaşamıyoruz fakat name özelliğine-fieldine ulaşabiliyoruz. 
//Buna prototyping denir.
customer.name = "Seda Özyurt"
console.log(customer.name);

//Class'a prototype atama işlemi aşağıdaki gibidir.
Customer.staticAtama = "Static atandım.";

console.log(Customer.staticAtama)

console.log(customer.id);

console.log(customer.customerNumber);

