console.log("1000 e kadar ki tüm mükemmel sayılar: ");

function findPerfectNumber() {

    for (let j = 1000; j > 0; j--) {
        let tplm = 0;
        for (let i = j; i > 0; i--) {
            if (j % i == 0) {
                tplm += i;
            }
        }
        if (tplm == j * 2) {
            console.log(j + ", mükemmel sayıdır.");
        }
        // else{
        //     console.log(j + ", mükemmel sayı değildir.");
        // }
    }
}

findPerfectNumber();