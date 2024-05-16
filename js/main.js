'use strict';


//Scrivi un programma che stampi in console i numeri da 1 a 100


for (let i = 1; i <= 100; i++) {
    //Qui stampo i numeri da 1 a 100
    /* console.log(i); */

    //Qui stampo solo i multipli di 3 e 5
        if (i%15==0) {
            console.log('FizzBuzz');
    //Da qui in poi gestisco i divisibili
        } else if (i%3==0) {
            console.log('fizz');
        } else if (i%5==0) {
            console.log('buzz');
        }  else {
            console.log(i);
        }

}