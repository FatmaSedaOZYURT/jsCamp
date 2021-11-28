console.log(" Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.");

function findFriendNumbers(...numbers) {
    let tplm1 = 0, tplm2 = 0, sayac = 0;
    numbers.map(number => {
        for (let i = number / 2; i > 0; i--) {
            if (number % i == 0) {
                if (sayac == 0) {
                    tplm1 += i;
                }else{
                    tplm2 += i;
                }
            }
        }
        sayac++;
    });
    if (tplm1 == numbers[1] && tplm2 == numbers[0]) {
        console.log(numbers[0] + " ve " + numbers[1] + " arkadaş sayılardır.");
    }else{
        console.log(numbers[0] + " ve " + numbers[1] + " arkadaş sayılar değildir.");
    }
}

 findFriendNumbers(1184, 1210);