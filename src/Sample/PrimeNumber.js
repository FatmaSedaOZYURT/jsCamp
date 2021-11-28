console.log("JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.");
function findPrime(...numbers) {
    numbers.map(number=>{
        let isPrime = false;
        for (let n = number - 1; n > 1; n--){
            if(number % n == 0){
                isPrime = true;
                break;
            }
        }
        if (isPrime) {
            console.log(number + " asal sayı değildir.");
        }else{
            console.log(number + " asal sayıdır.");
        }
    });
}

findPrime(21, 3, 5,4,7,12,14)

