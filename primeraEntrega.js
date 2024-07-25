alert("Bienvenido a Mueblería FEBE");
alert("A continuación elija una opción:");
let eleccion = "0"; // Inicializamos como string para evitar confusiones
const juegoComedor = 12000;
const sillones = 10000;
const sommier = 15000;
const escritorio = 9000;

let eleccionComedor = 0;
let eleccionSillones = 0;
let eleccionSommier = 0;
let eleccionEscritorio = 0;

while (eleccion !== "6") {
  eleccion = prompt(
    "Elija una opción:\n1) Juego de comedor\n2) Sillones\n3) Sommier\n4) Escritorios\n5) Ver precios\n6) Finalizar compra"
  );

  switch (eleccion) {
    case "1":
      eleccionComedor = parseInt(
        prompt("¿Cuántas unidades de juego de comedor desea comprar?")
      );
      break;
    case "2":
      eleccionSillones = parseInt(
        prompt("¿Cuántas unidades de sillones desea comprar?")
      );
      break;
    case "3":
      eleccionSommier = parseInt(
        prompt("¿Cuántas unidades de sommier desea comprar?")
      );
      break;
    case "4":
      eleccionEscritorio = parseInt(
        prompt("¿Cuántas unidades de escritorio desea comprar?")
      );
      break;
    case "5":
      alert(
        `Precios:\nJuego de comedor: $${juegoComedor}\nSillones: $${sillones}\nSommier: $${sommier}\nEscritorio: $${escritorio}`
      );
      break;
    case "6":
      break; // Finaliza el bucle cuando el usuario elige finalizar
    default:
      alert("Opción inválida. Por favor, elija una opción válida.");
  }
}

const totalCompra =
  eleccionComedor * juegoComedor +
  eleccionSillones * sillones +
  eleccionSommier * sommier +
  eleccionEscritorio * escritorio;
alert(`El total de su compra es: $${totalCompra}`);
