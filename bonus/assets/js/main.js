// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// stampa i numeri da 1 a 10 🐱‍👤
for (var i = 1; i <= 10; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista10').innerHTML += "<li class=\"dieci\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista10').innerHTML += "<li class=\"dieci\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista10').innerHTML += "<li class=\"dieci\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista10').innerHTML += "<li>" + i + "</li>"
    }
}

// seleziono la classe bottone da html 🐱‍👤
var bottone = document.querySelectorAll(".button");
// creo variabile che racchiuda gli li con classe "dieci" diventando un array 🐱‍👤
var fizz10 = document.getElementsByClassName("dieci");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz10.length; i++) {
    fizz10[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 11 a 20 🐱‍👤
for (var i = 11; i <= 20; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista20').innerHTML += "<li class=\"venti\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista20').innerHTML += "<li class=\"venti\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista20').innerHTML += "<li class=\"venti\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista20').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "venti" diventando un array 🐱‍👤
var fizz20 = document.getElementsByClassName("venti");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz20.length; i++) {
    fizz20[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 21 a 20 🐱‍👤
for (var i = 21; i <= 30; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista30').innerHTML += "<li class=\"trenta\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista30').innerHTML += "<li class=\"trenta\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista30').innerHTML += "<li class=\"trenta\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista30').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "trenta" diventando un array 🐱‍👤
var fizz30 = document.getElementsByClassName("trenta");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz30.length; i++) {
    fizz30[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 31 a 40 🐱‍👤
for (var i = 31; i <= 40; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista40').innerHTML += "<li class=\"quaranta\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista40').innerHTML += "<li class=\"quaranta\">" + "Fizz" + " " +"⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista40').innerHTML += "<li class=\"quaranta\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista40').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "quaranta" diventando un array 🐱‍👤
var fizz40 = document.getElementsByClassName("quaranta");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz40.length; i++) {
    fizz40[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 41 a 50 🐱‍👤
for (var i = 41; i <= 50; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista50').innerHTML += "<li class=\"cinquanta\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista50').innerHTML += "<li class=\"cinquanta\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista50').innerHTML += "<li class=\"cinquanta\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista50').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "cinquanta" diventando un array 🐱‍👤
var fizz50 = document.getElementsByClassName("cinquanta");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz50.length; i++) {
    fizz50[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 51 a 50 🐱‍👤
for (var i = 51; i <= 60; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista60').innerHTML += "<li class=\"sessanta\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista60').innerHTML += "<li class=\"sessanta\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista60').innerHTML += "<li class=\"sessanta\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista60').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "sessanta" diventando un array 🐱‍👤
var fizz60 = document.getElementsByClassName("sessanta");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz60.length; i++) {
    fizz60[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 61 a 70 🐱‍👤
for (var i = 61; i <= 70; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista70').innerHTML += "<li class=\"settanta\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista70').innerHTML += "<li class=\"settanta\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista70').innerHTML += "<li class=\"settanta\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista70').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "settanta" diventando un array 🐱‍👤
var fizz70 = document.getElementsByClassName("settanta");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz70.length; i++) {
    fizz70[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 71 a 80 🐱‍👤
for (var i = 71; i <= 80; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista80').innerHTML += "<li class=\"ottanta\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista80').innerHTML += "<li class=\"ottanta\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista80').innerHTML += "<li class=\"ottanta\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista80').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "ottanta" diventando un array 🐱‍👤
var fizz80 = document.getElementsByClassName("ottanta");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz80.length; i++) {
    fizz80[i].style.color = "#6d5c7e";
  }
});



// stampa i numeri da 81 a 90 🐱‍👤
for (var i = 81; i <= 90; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista90').innerHTML += "<li class=\"novanta\">" + "Fizz Buzz" + " " + "⚡" + "</li>"

    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista90').innerHTML += "<li class=\"novanta\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista90').innerHTML += "<li class=\"novanta\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista90').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "novanta" diventando un array 🐱‍👤
var fizz90 = document.getElementsByClassName("novanta");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz90.length; i++) {
    fizz90[i].style.color = "#6d5c7e";
  }
});

// stampa i numeri da 81 a 90 🐱‍👤
for (var i = 91; i <= 100; i++) {

// se il numero è sia multiplo di 3 che di 5 allora stampa Fizz Buzz 🐱‍👤
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("Fizz Buzz");
    document.getElementById('lista100').innerHTML += "<li>" + "Fizz Buzz" + " " + "⚡" + "</li>"
    // altrimenti se è solo multiplo di 3 stampa Fizz 🐱‍👤
    } else if (i%3 == 0) {
      console.log("Fizz");
      document.getElementById('lista100').innerHTML += "<li class=\"cento\">" + "Fizz" + " " + "⭐" + "</li>"

    // altrimenti se è solo multiplo di 5 stampa Buzz 🐱‍👤
    } else if (i%5 == 0) {
      console.log("Buzz");
      document.getElementById('lista100').innerHTML += "<li class=\"cento\">" + "Buzz" + " " + "🌟" + "</li>"

    // altrimenti stampa il numero 🐱‍👤
    } else {
      console.log(i);
      document.getElementById('lista100').innerHTML += "<li>" + i + "</li>"
    }
}

// creo variabile che racchiuda gli li con classe "cento" diventando un array 🐱‍👤
var fizz00 = document.getElementsByClassName("cento");
// creo un evento al click 🐱‍👤
bottone[0].addEventListener("click", function(e) {
  // ciclo per cambiare a ogni elemento dell'array il colore 🐱‍👤
  for (var i = 0; i < fizz00.length; i++) {
    fizz00[i].style.color = "#6d5c7e";
  }
});
