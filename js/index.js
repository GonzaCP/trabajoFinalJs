// OBJETOS A PARTIR DE UNA FUNCION

function Bandas (id, nombre, fecha, hora, lugar, precio) {
    this.id = id;
    this.nombre = nombre;
    this.fecha = fecha;
    this.hora = hora;
    this.lugar = lugar;
    this.precio = precio;
}

const banda1 = new Bandas (1, "Queen", "15/12/1986", "22 hs.", "Wembley Staidum", 150);
const banda2 = new Bandas (2, "Pink Floyd", "15/12/2022", "21 hs.", "Casino Magic", 250);
const banda3 = new Bandas (3, "Red Hot Chili Peppers", "21/12/2022", "22.30 hs.", "Slane Castle", 120);

// ARRAYS

const vaciarCarrito = [];
let llenarCarrito = [];
/* 
const gruposDeMusica = [
    {id: 1, nombre: "Queen", fecha: "15-12-1986", hora: "22.00", lugar: "Wembley Stadium", precio: 150},
    {id: 2, nombre: "Pink Floyd", fecha: "15-12-2022", hora: "21.00", lugar: "Casino Magic", precio: 250},    
    {id: 3, nombre: "Red Hot Chili Peppers", fecha: "30-10-2022", hora: "22", lugar: "Slane Castle", precio: 120}
]; 
 */

for (let i = 0; i <= llenarCarrito.length - 1; i++) {
    
}

// VARIABLES

let total = 0
let cantidad;
let selectedOption;
let selectedOption2;


//                              CÓDIGO                          //



// CAMBIO DE PRECIO DE ENTRADA SEGÚN LA BANDA QUE SE ELIJE

// BOTÓN SELECCION DE BANDA

let selectBanda = document.getElementById('seleccionBanda');

 // BOTÓN PRECIO X ENTRADA

 let precioEntrada = document.getElementById("precioEntrada");

selectBanda.addEventListener('change',
  function(){
    selectedOption = this.options[selectBanda.selectedIndex];
    if (selectedOption.value == 1) {
        selectedOption = banda1;       
    } else if (selectedOption.value == 2) {
        selectedOption = banda2;        
    } else if (selectedOption.value == 3) {
        selectedOption = banda3;       
    }   
    precioEntrada.placeholder = (selectedOption.precio);  
  });  

  
// CAMBIO DE SUBTOTAL SEGÚN CANTIDAD DE ENTRADAS

// BOTÓN CANTIDAD DE ENTRADAS
let selectCantidad = document.getElementById("cantidadDeEntradas");

// BOTÓN SUBTOTAL

let subTotal = document.getElementById("subtotal");

selectCantidad.addEventListener('change',
  function(){
    selectedOption2 = this.options[selectCantidad.selectedIndex];
    if (selectedOption2.value == 1) { 
        subTotal.placeholder = (selectedOption.precio * 1);    
    } else if (selectedOption2.value == 2) { 
        subTotal.placeholder = (selectedOption.precio * 2);       
    } else if (selectedOption2.value == 3) {   
        subTotal.placeholder = (selectedOption.precio * 3);       
    } else if (selectedOption2.value == 4) {  
        subTotal.placeholder = (selectedOption.precio * 4);        
    }    
});

// BOTÓN AGREGAR AL CARRITO PREVIENE RECARGA DE PÁGINA Y DESPLIEGA UNA TABLA CON LO ADQUIRIDO

let agregarAlCarrito = document.querySelector(".btn");

agregarAlCarrito.onclick = function(e) {
    e.preventDefault();
    let agregado = document.createElement("h5");
    agregado.innerHTML = `<p>El total a pagar es: $ ${subTotal.placeholder}</p>`;
    document.body.appendChild(agregado);
    
}




// RECUPERO DATOS DE UN INPUT (NOMBRE, APELLIDO, ETC.)
/* 
const eventKey = document.getElementById("formName");
eventKey.addEventListener("input", (e) => {
    console.log(e.target.value);
})
 */
/* 
const eventKey = document.getElementById("formName");
eventKey.addEventListener("input", (e) => {
    if (e.target.value === "") {
        console.log("Falló la validación");
    }
})
 */

// OBTENER DATOS DE UN FORMULARIO
/* 
const formulario = document.querySelector("form");

const nombre1 = document.getElementById("formName");

const mail = document.getElementById("formMail");

formulario.addEventListener("submit", validarFormulario);
function validarFormulario (e) {
    e.preventDefault()
    console.log(`${nombre1.value} ${mail.value}`);
} */