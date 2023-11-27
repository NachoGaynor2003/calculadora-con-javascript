const readline = require("readline");
const prompt = require("prompt-sync")();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return console.log("ERROR: El dividendo no puede ser cero");
  }
}
let opcion;

function menu() {
  console.log("BIENVENIDO A LA CALCULADORA");
  console.log("Ingrese 1 para sumar");
  console.log("Ingrese 2 para restar");
  console.log("Ingrese 3 para multiplicar");
  console.log("Ingrese 4 para dividir");
  console.log("Ingrese 0 para salir");

  rl.question("Ingrese la opcion --> ", function (opcion) {
    switch (opcion) {
      case "1":
        let a = parseInt(prompt("Ingrese el primer numero --> "));
        let b = parseInt(prompt("Ingrese el segundo numero --> "));
        console.log("Resultado : " + sumar(a, b));
        break;
      case "2":
        let c = parseInt(prompt("Ingrese el primer numero --> "));
        let d = parseInt(prompt("Ingrese el segundo numero --> "));
        console.log("Resultado : " + restar(c, d));
        break;
      case "3":
        let e = parseInt(prompt("Ingrese el primer numero --> "));
        let f = parseInt(prompt("Ingrese el segundo numero --> "));
        console.log("Resultado : " + multiplicar(e, f));
        break;
      case "4":
        let a1 = parseInt(prompt("Ingrese el primer numero --> "));
        let a2 = parseInt(prompt("Ingrese el segundo numero --> "));
        console.log("Resultado: " + dividir(a1, a2));
        break;
      case "0":
        console.log("Gracias por visitar el sistema");
        rl.close();
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
        break;
    }

    // Llamada recursiva para mostrar el menú nuevamente
    if (opcion !== "0") {
      menu();
    }
  });
}

// Llamada inicial para iniciar la calculadora
menu();
