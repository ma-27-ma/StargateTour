//////////////////// Declaración de variables /////////////////////

let nombreEmpresa = "StargateTour informa:";

let selectDestino = document.getElementById("destino");
// Esto sería: guarda la varialbe cuyo nombre es 'selectDestino' (como podría ser patataRoja)
// en el elemento del HTML cuyo id es 'destino' (ya que así lo he definido anteriormente en el select del HTML)

let aviso = document.querySelector(".mensaje");

let inputPasajeros = document.getElementById("numPasajeros");
//Guarda la variable 'inputPasajeros' en el HTML cuyo id es 'numPasajeros'

let btnCalcular = document.getElementById("btnCalcular");
//Guarda la variable 'Calcula' en el HTML cuyo id es 'btnCalcular'

let elSubtotal = document.getElementById("subTotal");
//Guarda la variable 'elSubtotal' en el HTML cuyo id es 'subtotal'

let elDescuento = document.getElementById("descuento");
//Guarda la varialbe 'elDescuento' en el HTML cuyo id es 'descuento'

let elTotal = document.getElementById("total");
//Guarda la variable 'elTotal' en el HTML cuyo id es 'total'

// let listado = document.querySelector(".listaPasajeros");
//Guarda la variable 'listado' en el HTML cuya CLASE es 'listaPasajeros'

//Todas estas variables pueden declararse con const ya que
//apuntan siempre al mismo elemento

let btnReset = document.getElementById("btnReset");

let desglose = document.querySelector(".desglose");

///////////   PARA EL BUCLE  ///////////

const selectDestinoGusano = document.getElementById("destinoGusano");
const inputPasajerosGusano = document.getElementById("pasajerosGusano");
const btnPasajes = document.getElementById("btnGusano");
const listaPasajes = document.getElementById("listaPasajes");
const mensajeGusano = document.getElementById("mensajeGusano");
const btnResetGusano = document.getElementById("btnResetGusano");
const plantillaPasaje = document.getElementById("plantillaPasaje");

///////////////////// Listeners ////////////////////////////

//Los addEventListeners substituyen en el JS el 'onclick'del HTML,
//es decir, o pones el onclick en el HTML o añades el addEventListener en el JS

btnCalcular.addEventListener("click", calcularPrecio);
//A la VARIABLE calcula añade un escuchador de evento click y ejecuta la funcion calcularPrecio

btnReset.addEventListener("click", resetearPrecio);
//A la variable resetea añade un escuchador de evento click y ejecuta la funcióin resetearPrecio

btnPasajes.addEventListener("click", generarPasajes);
btnResetGusano.addEventListener("click", resetearGusano);

///////////// FUNCIÓN CALCULAR PRECIO ////////////////////

function calcularPrecio() {
  // console.log("el botón funciona");
  let destinacion = Number(selectDestino.value);
  //Aquí sí tiene sentido usar let porque es un dato se obtiene y utiliza dentro de la función

  let cantidadPasajeros = Number(inputPasajeros.value);
  //Creamos las nuevas variables "patata roja" y les especificamos
  //que son un número (cuantificable) y que hace referencia al valor
  //de la variable definida al principio del JS

  ////// Validaciones básicas //////

  if (destinacion <= 0) {
    aviso.innerHTML = nombreEmpresa + " debe seleccionar primero su destino";
  } else if (cantidadPasajeros <= 0) {
    aviso.innerHTML = nombreEmpresa + " debe seleccionar al menos un pasajero";
  } else if (!Number.isInteger(cantidadPasajeros)) {
    aviso.innerHTML = `${nombreEmpresa} ha de introducir un número entero`;
    desglose.style.display = "none";
    //Template Literals: escribir entre accent oberts `` para concatenar
    //texto y variables de forma más cómoda
  } else if (cantidadPasajeros > 10) {
    aviso.innerHTML = `${nombreEmpresa} puede adquirir como máximo 10 pasajes`;
  } else {
    aviso.innerHTML = "";
    //este aviso es para borrar los avisos anteriores: 'debe seleccionar al menos un pasajero' y
    //'puede adquirir como maximo 10 pasajes'

    const subTotal = destinacion * cantidadPasajeros;
    elSubtotal.innerHTML = `SubTotal: ${subTotal} STR`;

    elDescuento.innerHTML = `Descuento: adquiere 3 pasajes o más para beneficiarte de un 10% de descuento`;

    elTotal.innerHTML = `Total: ${subTotal} STR`;

    if (cantidadPasajeros >= 3) {
      const descuento = (subTotal * 10) / 100;
      elDescuento.innerHTML = `Descuento del 10% aplicado: ${descuento} STR`;

      const total = subTotal - descuento;

      elTotal.innerHTML = `Total: ${total} STR`;
    }
    btnReset.style.display = "block";
    desglose.style.display = "block";
  }
}

///////IDEA : PONER BOTÓN DE RESET /////

//Vale, Merceditas, tienes el botón, ahora lo que quieres
//es que el botón de Reset, sólo aparezca al hacer click al botón de calcular

function resetearPrecio() {
  // console.log("el botón resetea");

  selectDestino.value = "";
  inputPasajeros.value = "";
  desglose.style.display = "none";
  btnReset.style.display = "none";
}

// Bucle para generar pasajes

function generarPasajes() {
  let destinoGusano = selectDestinoGusano.value;
  let cantidadPasajerosGusano = Number(inputPasajerosGusano.value);
  let cantidadPasajerosGusanoDecimal = Number(inputPasajerosGusano.value);

  mensajeGusano.innerHTML = "";
  listaPasajes.innerHTML = "";

  if (destinoGusano === "") {
    mensajeGusano.innerHTML = `${nombreEmpresa} debe seleccionar primero su destino`;

  } else if (cantidadPasajerosGusano <= 0) {
    mensajeGusano.innerHTML = `${nombreEmpresa} debe seleccionar al menos un pasajero`;

  } else if (!Number.isInteger(cantidadPasajerosGusano)) {
    mensajeGusano.innerHTML = `${nombreEmpresa} ha de introducir un número entero`;


  } else if (cantidadPasajerosGusano > 10) {
    mensajeGusano.innerHTML = `${nombreEmpresa} puede adquirir como máximo 10 pasajes`;
  } else {
    for (let pasaje = 1; pasaje <= cantidadPasajerosGusano; pasaje++) {
      let codigoPasaje;
      do {
        codigoPasaje = Math.floor(Math.random() * 1000);
      } while (codigoPasaje < 100);

      // Vale, a ver si yo entiendo lo que me dice la IA:
      // cloneNode lo que hace es hacer una copia (clon) del Nodo
      // los nodos del DOM son elementos del HTML, entonces...
      // ¿por qué true y no false? Porque con true se copian todos los elementos que están dentro del nodo, es decir, los divs, los strong los span ....
      // si fuera cloneNode(false) sólo se ocpiaría el div, sin los elementos internos -----------> Merce, ahora lee el APPEND, que va de la mano, bonita
      const nuevoPasaje = plantillaPasaje.content.cloneNode(true);

      nuevoPasaje.querySelector(".numeroPasaje").textContent = "Pasaje " + pasaje;

      nuevoPasaje.querySelector(".destinoPasaje").textContent = destinoGusano;

      nuevoPasaje.querySelector(".codigoPasaje").textContent = "Código: " + codigoPasaje;

      //APPEND: uan vez hecha la copia (clon) de la plantilla (template del HTML) tienes que decirle a la función que añada cada pasaje generado (elemento) que será de 1 a 10 (en función de los pasajeros que elija el usuario).

      // Todo esto está muy bien, Merce, pero veremos si eres capaz, en otra situación similar, de llegar a la conclusión de que necesitas un template en el HTML, un cloneNode para copiar la plantailla y un append para añadir cada elemento del bucle en el JS por tí misma

      listaPasajes.append(nuevoPasaje);
    }
    btnResetGusano.style.display = "block";
  }
}

function resetearGusano() {
  selectDestinoGusano.value = "";
  inputPasajerosGusano.value = "";
  listaPasajes.innerHTML = "";
  btnResetGusano.style.display = "none";
}

// VALE, MARÍA, ME LA JUEGO A HACER EL BURGERMENU CON JS, DESÉAME SUERTE PORQUE LA IA YA LA TENGO DE MI LADO xD

// Merce, primero tienes que crear las variables
// Después tienes que hacer los listeners
// Después tienes que hacer la funcion
// ¿Chupado, no? verás que no...  a ver... (como diría mi padre: "eso dijo el ciego") tengo un nav con una ul y luego un div con una class hamburgesa ,(por cierto, hamburguesa la que me comía yo ahora)
// lo que quieres es que aparezca el menú hamburguesa en el div hamburguesa

const menu = document.getElementById("menu");
const btnHamburguesa = document.querySelector(".hamburguesa");


btnHamburguesa.addEventListener("click", abrirHamburguesa);

function abrirHamburguesa() {
  menu.classList.toggle("activo");
  document.body.classList.toggle("no-scroll")
  btnHamburguesa.classList.toggle("activo");
}




const linksHamburguesa = menu.querySelectorAll("a");

linksHamburguesa.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("activo");
    document.body.classList.remove("no-scroll");
    btnHamburguesa.classList.remove("activo")
  });

});


// Esto es para que el burgermenu se cierre cuando hago scroll, pero después de hacelo funcionar, me he dado cuenta que no es lo que quiero... Lo que quiero es que WINDOW NO HAGA SCROLL mientra esté el BURGERMENU ABIERTO. Así que nada, a por ello xD

// window.addEventListener("scroll", cerrarHamburguesa)
// function cerrarHamburguesa(){
//   menu.classList.remove("activo")
// }




// Evitar que window haga scroll cuando el burgermenu esté abierto


const body = document.body;

body.addEventListener("sticky", notScroll)

function notScroll() {
  body.sticky

}
