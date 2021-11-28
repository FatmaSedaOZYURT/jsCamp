function findPrimes(counter = 1000) {
    console.log(counter + " kadar olan asal sayılar: ");
    for (let i = 2; i < counter; i++) {
        
        let isPrime=true;
        for (let j = i-1; j > 1; j--) {
            if (i%j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i + ", asal sayıdır.");
        }
    }

}
findPrimes();
findPrimes(2000);