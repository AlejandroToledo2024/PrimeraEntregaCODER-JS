alert("Bienvenido a Mueblería FEBE");
alert("A continuación elija una opción:");
let eleccion = "0";
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

let cuotaDos = totalCompra / 2;

let cuotaTres= totalCompra / 3;

let cuotaCuatro= parseFloat(totalCompra) * 1.10 / 4;

let cuotaCinco= parseFloat(totalCompra) * 1.10 /5;

let cuotaSeis = parseFloat(totalCompra) * 1.10/ 6;




let cantidadDeCuotas = "0";
let cuotas = prompt("¿desea hacerlo en cuotas? hasta 3 sin recargo");
if (cuotas === "si") {
  parseInt(
    prompt(
      `cantidad \n1 Cuota de $${totalCompra} \n2 Cuotas de $${cuotaDos} \n3 Cuotas de $${cuotaTres} \n4 Cuotas de $${cuotaCuatro.toFixed(0)} (10%+) \n5 Cuotas de $${cuotaCinco.toFixed(0) } (10%+)  \n6 Cuotas de $${cuotaSeis.toFixed(0)} (10%+) `
    )
    );
    alert("Transaccion realizada , !gracias por su compra!")
} else {
  alert("gracias por su compra");
}
//`hola mundo ${variable}`
