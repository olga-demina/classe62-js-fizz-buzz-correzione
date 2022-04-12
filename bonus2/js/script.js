// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//

// Se il numero è multiplo di 3 scrivo "Fizz"
// altrimenti Se il numero è multiplo di 5 scrivo "Buzz"
// altrimenti Se il numero è multiplo sia di 3 che di 5 scrivo "FizzBuzz"
// Altrimenti scrivo il numero

const rowItems = document.querySelector(".row");
console.log(rowItems);

for (let i = 1; i <= 100; i++) {
    let result = i;
    let color = "";
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
       result = "FizzBuzz";
       color = "bg-pink";
    } else if ( i % 3 === 0 ) {
        result = "Fizz";
        color = "bg-green";
    } else if ( i % 5 === 0 ) {
        result = "Buzz";
        color = "bg-yellow";
    } 
    
    // OUTPUT
    //rowItems.innerHTML += `<div class="box ${color}">${result}</div>`;
    const newBox = document.createElement("div");
    newBox.innerHTML = result;
    newBox.classList.add("box");

    if ( color ) {
        newBox.classList.add(color);
    }
    
    rowItems.append(newBox);
}