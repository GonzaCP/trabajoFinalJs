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
let llenarCarrito = [];
let carritoObjetoArray = [];

// VARIABLES
let total = 0;
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

// FUNCIÓN PARA RENDERIZAR LOS INPUTS
function renderizandoInputs () {
  let limpiarInputs = document.getElementById("formularioEleccion").reset(); 
  subTotal.placeholder = "$ -"; 
  precioEntrada.placeholder = "$ -";

}

// FUNCIÓN AGREGAR AL CARRITO SWEET ALERT 2
function SWEETagregandoAlCarrito () {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Agregaste al carrito',
    showConfirmButton: false,
    timer: 2000
})
}

// FUNCIÓN DE ERROR CUANDO NO HAY NADA EN EL CARRITO
function SWEETcarritoVacioError () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Parece que ando anduvo mal!',    
  })
}

// FUNCIÓN DE ERROR NÚMEROS DE TARJETA
function SWEETerrorTarjeta () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Revisar que sean 16 los números ingresados de la tarjeta',    
  })
}

// FUNCIÓN DE ERROR NOMBRE Y APELLIDO
function SWEETerrorNombre () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ingresar correctamente el nombre y apellido',    
  })
}

// FUNCIÓN DE ERROR CÓDIGO DE SEGURIDAD
function SWEETerrorCod () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Revisar que sean 3 los números ingresados para el código de seguridad',    
  })
}

// FUNCIÓN DE ERROR FECHA DE VENCIMIENTO
function SWEETerrorFecha () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Revisar que sean 4 los números ingresados para la fecha de vencimiento',    
  })
}

// FUNCIÓN DE ERROR EMAIL
function SWEETerrorEmail () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Escribe correctamente el email',    
  })
}

// FUNCIÓN DE ERROR NÚMERO DE CONTACTO
function SWEETerrorContacto () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Escribe correctamente el número de contacto',    
  })
}

function SWEERcarritoError () {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ya contienes entradas de esta banda, elija otra por favor',    
  })
}
 
// FUNCIÓN ELIMINANDO CARRITO SWEET ALERT 2
function SWEETeliminandoCarrito () {

  llenarCarrito.splice(0, llenarCarrito.length);
  total = 0;

  Swal.fire({    
    title: '¿Estás seguro de eliminar todo el carrito?',   
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {        
      location.reload();      
    }    
  })    
}

// FUNCIÓN CONFIRMANDO COMPRA SWEET ALERT 2
function confirmandoCompra () { 

  let nombreYApellidoStrVuelta = JSON.parse(localStorage.getItem("Nombre y Apellido"));

  Swal.fire({
    title: '¿Desea confirmar la compra?',   
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, confirmar compra!'
  }).then((result) => {
    if (result.isConfirmed) {     
      Swal.fire({
        title: `Gracias por su compra ${nombreYApellidoStrVuelta}`,   
        icon: 'success',
        text: 'Corroboramos los datos ingresados y nos pondremos en contacto para informarle novedades!',        
        confirmButtonColor: '#3085d6',       
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {  
          location.reload();      
        }
      })       
    }
  })
}

// FUNCIÓN SALIDA FINAL
function salidaFinal () {  
  //BOTÓN FINALIZAR COMPRA
  let botonDeConfirmar = document.getElementById("confirmandoCompra");
  botonDeConfirmar.addEventListener("click", finalizandoCompra);    

    function finalizandoCompra (e) {
   
      e.preventDefault()              

    }

  let formularioSalida = document.getElementById("formularioFinal");
  let agregoFormularioFinal = document.createElement("div");
  agregoFormularioFinal.innerHTML = `<h2 class="section__recitales-tittle">Ingrese los datos de su tarjeta</h2>
  <form class="col g-3">
    <div class="row-md-3 subtotal">
      <label for="validationDefault01" class="form-label">Número de tarjeta</label>
      <input type="number" class="form-control input" id="validationDefault01" value="" placeholder="xxxx xxxx xxxx xxxx" required>
    </div>
    <div class="row-md-3 subtotal">
      <label for="validationDefault02" class="form-label">Nombre y Apellido</label>
      <input type="text" class="form-control input" id="validationDefault02" value="" placeholder="Tal cual figura en la tarjeta" required>
    </div>
    <div class="row-md-2 subtotal">
      <label for="validationDefault03" class="form-label">Código de seguridad</label>
      <input type="number" class="form-control input" id="validationDefault03" value="" placeholder="xxx" required>
    </div> 
    <div class="row-md-2 subtotal">
      <label for="validationDefault04" class="form-label">Fecha de vencimiento</label>
      <input type="number" class="form-control input" id="validationDefault04" value="" placeholder="MMAA" required>
    </div>  
    <div class="row-md-3 subtotal">
      <label for="validationDefault05" class="form-label">Email</label>
      <input type="email" class="form-control input" id="validationDefault05" placeholder="ejemplo@masejemplo.com.ar" required>
    </div>
    <div class="row-md-3 subtotal">
      <label for="validationDefault06" class="form-label">N° de contacto</label>
      <input type="number" class="form-control input" id="validationDefault06" value="" placeholder="EJ: 0299 - 154204258" required>
    </div>  
    <div class="row-md-3 button">
      <button class="btn btn-outline-success" id="compraConfirmada" type="submit">Confirmar compra</button>
    </div>
  </form>`;
  formularioSalida.appendChild(agregoFormularioFinal);   

  let compraConfirmadisima = document.getElementById("compraConfirmada");  
   
  compraConfirmadisima.onclick = function(e) { 

    e.preventDefault();

    let numTarjeta = document.getElementById("validationDefault01");
    let nombreApellido = document.getElementById("validationDefault02");
    let codSeguridad = document.getElementById("validationDefault03");
    let fechaVencimiento = document.getElementById("validationDefault04");
    let email2 = document.getElementById("validationDefault05");
    let numContacto = document.getElementById("validationDefault06");

    if (numTarjeta.value === "" || numTarjeta.value == null || numTarjeta.value.length != 16) {
      SWEETerrorTarjeta();
    } else if (nombreApellido.value === "" || nombreApellido.value == null) {
      SWEETerrorNombre();
    } else if (codSeguridad.value === "" || codSeguridad.value == null || codSeguridad.value.length != 3) {
      SWEETerrorCod();
    } else if (fechaVencimiento.value === "" || fechaVencimiento.value == null || fechaVencimiento.value.length != 4) {
      SWEETerrorFecha();
    } else if (email2.value === "" || email2.value == null) {
      SWEETerrorEmail();
    } else if (numContacto.value === "" || numContacto.value == null) {
      SWEETerrorContacto();
    } else {

      // LOCAL STORAGE ARRAY
      let nombreYApellidoStr = JSON.stringify(nombreApellido.value);
      localStorage.setItem("Nombre y Apellido", nombreYApellidoStr);      

      confirmandoCompra ();
    }  
   }      
}

// SEGUNDA COMPRA  //
function segundaCompra () {

    //BOTÓN FINALIZAR COMPRA
    let botonDeConfirmar = document.getElementById("confirmandoCompra");
    botonDeConfirmar.addEventListener("click", finalizandoCompra);    

    function finalizandoCompra (e) {
   
      e.preventDefault()

      botonDeConfirmar.removeEventListener("click", finalizandoCompra); 

      salidaFinal();        

    }
   
    //BOTÓN ELIMINAR CARRITO
    let botonEliminarCarrito = document.getElementById("eliminandoCompra");
 
    botonEliminarCarrito.onclick = function(ev) { 

      ev.preventDefault(); 

      SWEETeliminandoCarrito ();         
    } 

     // CLICK BOTÓN AGREGAR AL CARRITO
     agregarAlCarrito.onclick = function(evt) { 

      evt.preventDefault();       
      
      if (subTotal.placeholder === "$ -" || precioEntrada.placeholder === "$ -") {
        SWEETcarritoVacioError ();  

      } else if (carritoObjetoArray.find(objeto => objeto === selectedOption)) {
        SWEERcarritoError ();
        renderizandoInputs ();

      } else {

        SWEETagregandoAlCarrito();           

        llenarCarrito.push(Number(subTotal.placeholder));   
        carritoObjetoArray.push(selectedOption);      

        // SUMANDO VALORES DEL ARRAY
        total = llenarCarrito.reduce((acumulador, elemento) => acumulador + elemento, 0);

        let btnTotalAPagar = document.getElementById("totalAPagar"); 

        btnTotalAPagar.placeholder = `$${total}`;   
        
          // LOCAL STORAGE ARRAY
        let llenarCarritoStr = JSON.stringify(llenarCarrito);

        localStorage.setItem("carrito", llenarCarritoStr);

        let llenarCarritoStrVuelta = JSON.parse(localStorage.getItem("carrito"));    

        // LOCAL STORAGE OBJETO
        let bandaCompleta = JSON.stringify(selectedOption);

        localStorage.setItem("Recital" , bandaCompleta);

        let bandaCompletaVuelta = localStorage.getItem("Recital");     

        // AGREGANDO FILAS
        let agregandoCosas = document.querySelector(".table-group-divider");        
        let agregoFormulario = document.createElement("tr");

        agregoFormulario.innerHTML = `<tr>
        <th scope="row">${selectedOption2.value}</th>
        <td>${selectedOption.nombre}</td>
        <td>$ ${subTotal.placeholder}</td>        
        </tr>`;
        agregandoCosas.appendChild(agregoFormulario);  
        
        renderizandoInputs (); 
      }
    }                   
}

// BOTÓN AGREGAR AL CARRITO 
let agregarAlCarrito = document.querySelector(".btn");

// PRIMER COMPRA
agregarAlCarrito.onclick = function(e) {  
    e.preventDefault();     

    if (subTotal.placeholder === "$ -" || precioEntrada.placeholder === "$ -") {
      SWEETcarritoVacioError ();      
    } else {
      SWEETagregandoAlCarrito();      

      llenarCarrito.push(Number(subTotal.placeholder)); 
      carritoObjetoArray.push(selectedOption);
      
      // SUMANDO VALORES DEL ARRAY
      total = llenarCarrito.reduce((acumulador, elemento) => acumulador + elemento, 0);  
      
      // LOCAL STORAGE ARRAY
      let llenarCarritoStr = JSON.stringify(llenarCarrito);
      localStorage.setItem("carrito", llenarCarritoStr);

      let llenarCarritoStrVuelta = JSON.parse(localStorage.getItem("carrito"));

      // LOCAL STORAGE OBJETO
      let bandaCompleta = JSON.stringify(selectedOption);
      localStorage.setItem("Recital" , bandaCompleta);

      let bandaCompletaVuelta = localStorage.getItem("Recital");

      //CREACIÓN DE TABLA CON PRODUCTOS DEL CARRITO
      let formularioFinal = document.getElementById("formularioEntradas");
      let agregoFormulario = document.createElement("div");
      agregoFormulario.innerHTML = `
      <table class="table colorTable">
        <thead>
          <tr>
            <th scope="col">Cantidad de entradas</th>
            <th scope="col">Banda</th>
            <th scope="col">Subtotal</th>            
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">${selectedOption2.value}</th>
            <td>${selectedOption.nombre}</td>
            <td>$ ${subTotal.placeholder}</td>            
          </tr>      
        </tbody>
      </table>
      <fieldset disabled="disabled">
        <div class="subtotal"> 
          <label>TOTAL A PAGAR</label>
          <input class="input" id="totalAPagar" placeholder="$${total}"/>
        </div>
      </fieldset> `;
      
      formularioFinal.appendChild(agregoFormulario);

      // CREACIÓN BOTONES 'FINALIZAR COMPRA' Y 'CONFIRMAR COMPRA'
     
      let botonNuevo = document.querySelector(".button");
      let botonConfirmar = document.createElement("div");     
      let botonEliminar = document.createElement("div");

      botonConfirmar.innerHTML = `<button class="btn btn-outline-success" id="confirmandoCompra" type="submit">Finalizar Compra</button>`;  
      botonConfirmar.className = "row-md-3 button";
      botonNuevo.appendChild(botonConfirmar);       
      
      botonEliminar.innerHTML = `<button class="btn btn-outline-success" id="eliminandoCompra" type="submit">Eliminar carrito</button>`;  
      botonEliminar.className = "row-md-3 button";
      botonNuevo.appendChild(botonEliminar);
    }       

    renderizandoInputs ();  
    segundaCompra();  

  }


