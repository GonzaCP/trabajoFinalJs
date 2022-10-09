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

/* for (let i = 0; i <= llenarCarrito.length - 1; i++) {
    
} */

// VARIABLES

let total = 0
let cantidad;
let selectedOption;
let selectedOption2;


//                              CÓDIGO                          //

// BOTÓN SELECCION DE BANDA

let selectBanda = document.getElementById('seleccionBanda');

// BOTÓN PRECIO X ENTRADA

let precioEntrada = document.getElementById("precioEntrada");

// CAMBIO DE PRECIO DE ENTRADA SEGÚN LA BANDA QUE SE ELIJE

selectBanda.addEventListener('change',
  function() {
    selectedOption = this.options[selectBanda.selectedIndex];
    subTotal.placeholder = "$ -"
    if (selectedOption.value == 1) {
        selectedOption = banda1;       
    } else if (selectedOption.value == 2) {
        selectedOption = banda2;        
    } else if (selectedOption.value == 3) {
        selectedOption = banda3;       
    }   
    precioEntrada.placeholder = (selectedOption.precio);  
  });   


// BOTÓN CANTIDAD DE ENTRADAS
let selectCantidad = document.getElementById("cantidadDeEntradas");

// BOTÓN SUBTOTAL

let subTotal = document.getElementById("subtotal");

// CAMBIO DE SUBTOTAL SEGÚN CANTIDAD DE ENTRADAS
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

//llenarCarrito.push(total);

// AGREGO MAS COSAS AL CARRITO Y SE CREA NUEVA FILA

function segundaCompra () {

    let botonDeConfirmar = document.getElementById("confirmandoCompra");
    botonDeConfirmar.onclick = function() {                        
        // ACA VA UN SWEET ALERT 2
        
    }

    let botonEliminarCarrito = document.getElementById("eliminandoCompra");
    botonEliminarCarrito.onclick = function() {
        // ACA VA UN SWEET ALERT 2
        Swal.fire({
            title: '¿Estás seguro de eliminar todo el carrito?',
            text: "Quedará vacio",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Carrito vacio',
                'No hay productos en el carrito',
                'success'
              )
            }
          })
    }
  

    agregarAlCarrito.onclick = function(e) {        
        e.preventDefault();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregaste al carrito',
            showConfirmButton: false,
            timer: 1500
          })
        llenarCarrito.unshift(subTotal.placeholder);        
        let agregandoCosas = document.querySelector(".table-group-divider");
        let agregoFormulario = document.createElement("tr");
        agregoFormulario.innerHTML = `<tr>
        <th scope="row">${selectedOption2.value}</th>
        <td>${selectedOption.nombre}</td>
        <td>$ ${subTotal.placeholder}</td>
        <td>$ ${llenarCarrito}</td>
        </tr>`;
        agregandoCosas.appendChild(agregoFormulario);       
        
    }
}

// BOTÓN AGREGAR AL CARRITO PREVIENE RECARGA DE PÁGINA, PUSHEA LO COMPRADO AL CARRITO, DESPLIEGA UNA TABLA CON LO ADQUIRIDO

let agregarAlCarrito = document.querySelector(".btn");

agregarAlCarrito.onclick = function(e) {
    e.preventDefault();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    llenarCarrito.push(subTotal.placeholder);    
    let formularioFinal = document.getElementById("formularioEntradas");
    let agregoFormulario = document.createElement("div");
    agregoFormulario.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Cantidad de entradas</th>
        <th scope="col">Banda</th>
        <th scope="col">Subtotal</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row">${selectedOption2.value}</th>
        <td>${selectedOption.nombre}</td>
        <td>$ ${subTotal.placeholder}</td>
        <td>$ ${llenarCarrito}</td>
      </tr>      
    </tbody>
  </table>`;
    formularioFinal.appendChild(agregoFormulario);
    let botonNuevo = document.querySelector(".col-md-3");
    let botonConfirmar = document.createElement("button");
    botonConfirmar.innerHTML = `<button class="btn btn-primary" id="confirmandoCompra" type="submit">Confirmar Compra</button>`;  
    botonNuevo.appendChild(botonConfirmar);
    let botonNuevo2 = document.querySelector(".col-md-3");
    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = `<button class="btn btn-primary" id="eliminandoCompra" type="submit">Eliminar carrito</button>`;  
    botonNuevo2.appendChild(botonEliminar);
    
    segundaCompra(); 
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