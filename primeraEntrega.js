alert("Bienvenido a Mueblería FEBE");
alert("A continuación elija una opción:");

const juegoComedor = 12000;
const sillones = 10000;
const sommier = 15000;
const escritorio = 9000;

let eleccionComedor = 0;
let eleccionSillones = 0;
let eleccionSommier = 0;
let eleccionEscritorio = 0;

function calcularCuotas(totalCompra, cantidadCuotas) {
  let cuota;
  if (cantidadCuotas === 1) {
    cuota = totalCompra;
  } else if (cantidadCuotas === 2) {
    cuota = totalCompra / 2;
  } else if (cantidadCuotas === 3) {
    cuota = totalCompra / 3;
  } else if (cantidadCuotas >= 4 && cantidadCuotas <= 6) {
    cuota = (totalCompra * 1.1) / cantidadCuotas;
  } else {
    cuota = totalCompra;
  }
  return cuota.toFixed(0);
}

let eleccion = "0";

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
        `Precios:\nJuego de comedor: ${juegoComedor}\nSillones: ${sillones}\nSommier: ${sommier}\nEscritorio: ${escritorio}`
      );
      break;
    case "6":
      break;
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

let cuotas = prompt("¿Desea hacerlo en cuotas? Hasta 3 cuotas sin recargo. Escriba el número de cuotas o 'no' para pagar al contado.");

if (cuotas.toLowerCase() !== "no") {
  cuotas = parseInt(cuotas);
  if (cuotas >= 1 && cuotas <= 6) {
    let montoCuota = calcularCuotas(totalCompra, cuotas);
    alert(`Su compra en ${cuotas} cuotas será de $${montoCuota} por cuota.`);
  } else {
    alert("Número de cuotas no válido. Se aplicará el pago al contado.");
  }
} else {
  alert("Gracias por su compra.");
}
