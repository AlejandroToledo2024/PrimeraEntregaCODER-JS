alert("Bienvenido a Muebleria FEBE");
alert("A copntinuacion elija un opcion :");
let eleccion = prompt(
  "1)-juego de comedor 2)-Sillones 3)-Sommier 4)-Escritorios 5)-Precios 6)- Finalizar"
);
const juegoComedor = 12000;
const sillones = 10000;
const sommier = 15000;
const escritorio = 9000;

let eleccionComedor = 0;
let eleccionSillones = 0;
let eleccionSommier = 0;
let eleccionEscritorio = 0;

while (eleccion != 6) {
  switch (eleccion) {
    case "1":
      eleccionComedor = parseInt(prompt("una unidad? escriba cantidad"));
      break;
    case "2":
      eleccionSillones = parseInt(prompt("una unidad? escriba cantidad"));
      break;
    case "3":
      eleccionSommier = parseInt(prompt("una unidad? escriba cantidad"));
    case "4" :
        eleccionEscritorio = parseInt(prompt("una unidad? escriba cantidad"));
        break;
        case "5" :
            alert (`precios : juego de comedor ${juegoComedor} , sillones ${sillones} , sommier ${sommier} , escritorio ${escritorio} `);
            break;
    }

}
