// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi โFizzโ al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// stampa i numeri da 1 a 100 ๐ฑโ๐ค
for (var i = 1; i <= 100; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista').innerHTML += "<li>" + "Fizz Buzz" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista').innerHTML += "<li>" + "Fizz" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista').innerHTML += "<li>" + "Buzz" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista').innerHTML += "<li>" + i + "</li>"
    }
}
