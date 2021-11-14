// extends kelimesiyle yapılır.
//Eğer base constructer varsa; super fonksiyonu kullanılır.

class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber); //base constructor a gider
        this.firstName = firstName;
    }
}
class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber);
        this.companyName = companyName;
    }
}
