// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi โFizzโ al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// stampa i numeri da 1 a 10 ๐ฑโ๐ค
for (var i = 1; i <= 10; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista10').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista10').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista10').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista10').innerHTML += "<li>" + i + "</li>"
    }
}

// // seleziono la classe bottone da html ๐ฑโ๐ค
// var bottone = document.querySelectorAll(".button");
// // creo variabile che racchiuda gli li con classe "dieci" diventando un array ๐ฑโ๐ค
// var fizz10 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz10.length; i++) {
//     fizz10[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 11 a 20 ๐ฑโ๐ค
for (var i = 11; i <= 20; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista20').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista20').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista20').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista20').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "venti" diventando un array ๐ฑโ๐ค
// var fizz20 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz20.length; i++) {
//     fizz20[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 21 a 20 ๐ฑโ๐ค
for (var i = 21; i <= 30; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista30').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista30').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista30').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista30').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "trenta" diventando un array ๐ฑโ๐ค
// var fizz30 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz30.length; i++) {
//     fizz30[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 31 a 40 ๐ฑโ๐ค
for (var i = 31; i <= 40; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista40').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista40').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " +"โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista40').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista40').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "quaranta" diventando un array ๐ฑโ๐ค
// var fizz40 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz40.length; i++) {
//     fizz40[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 41 a 50 ๐ฑโ๐ค
for (var i = 41; i <= 50; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista50').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista50').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista50').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista50').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "cinquanta" diventando un array ๐ฑโ๐ค
// var fizz50 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz50.length; i++) {
//     fizz50[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 51 a 50 ๐ฑโ๐ค
for (var i = 51; i <= 60; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista60').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista60').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista60').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista60').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "sessanta" diventando un array ๐ฑโ๐ค
// var fizz60 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz60.length; i++) {
//     fizz60[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 61 a 70 ๐ฑโ๐ค
for (var i = 61; i <= 70; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista70').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista70').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista70').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista70').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "settanta" diventando un array ๐ฑโ๐ค
// var fizz70 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz70.length; i++) {
//     fizz70[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 71 a 80 ๐ฑโ๐ค
for (var i = 71; i <= 80; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista80').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista80').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista80').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista80').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "ottanta" diventando un array ๐ฑโ๐ค
// var fizz80 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz80.length; i++) {
//     fizz80[i].style.color = "#6d5c7e";
//   }
// });



// stampa i numeri da 81 a 90 ๐ฑโ๐ค
for (var i = 81; i <= 90; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista90').innerHTML += "<li class=\"fizz\">" + "Fizz Buzz" + " " + "โก" + "</li>"

    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista90').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista90').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista90').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "novanta" diventando un array ๐ฑโ๐ค
// var fizz90 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz90.length; i++) {
//     fizz90[i].style.color = "#6d5c7e";
//   }
// });

// stampa i numeri da 81 a 90 ๐ฑโ๐ค
for (var i = 91; i <= 100; i++) {

// se il numero รจ sia multiplo di 3 che di 5 allora stampa Fizz Buzz ๐ฑโ๐ค
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista100').innerHTML += "<li>" + "Fizz Buzz" + " " + "โก" + "</li>"
    // altrimenti se รจ solo multiplo di 3 stampa Fizz ๐ฑโ๐ค
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista100').innerHTML += "<li class=\"fizz\">" + "Fizz" + " " + "โญ" + "</li>"

    // altrimenti se รจ solo multiplo di 5 stampa Buzz ๐ฑโ๐ค
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista100').innerHTML += "<li class=\"fizz\">" + "Buzz" + " " + "๐" + "</li>"

    // altrimenti stampa il numero ๐ฑโ๐ค
    } else {
      console.log(i);
      document.getElementById('lista100').innerHTML += "<li>" + i + "</li>"
    }
}

// // creo variabile che racchiuda gli li con classe "cento" diventando un array ๐ฑโ๐ค
// var fizz00 = document.getElementsByClassName("fizz");
// // creo un evento al click ๐ฑโ๐ค
// bottone[0].addEventListener("click", function(e) {
//   // ciclo per cambiare a ogni elemento dell'array il colore ๐ฑโ๐ค
//   for (var i = 0; i < fizz00.length; i++) {
//     fizz00[i].style.color = "#6d5c7e";
//   }
// });

var bottone = $(".button");
var fizz = $(".fizz");

bottone.click(function() {
  fizz.toggleClass("active");
});
