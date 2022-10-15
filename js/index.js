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

// VARIABLES
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

// FUNCIÓN CONFIRMANDO COMPRA SWEET ALERT 2
function confirmandoCompra () {
  Swal.fire({
    title: '¿Desea confirmar la compra?',   
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, confirmar compra!'
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  
  
}



// FUNCIÓN ELIMINANDO CARRITO SWEET ALERT 2
function SWEETeliminandoCarrito () {

  llenarCarrito.splice(0, llenarCarrito.length);
  total = 0;

  // ELIMINAR CARRITO DEL LOCAL STORAGE

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

// FUNCIÓN SALIDA FINAL
function salidaFinal () {  
  let formularioSalida = document.getElementById("formularioFinal");
  let agregoFormularioFinal = document.createElement("div");
  agregoFormularioFinal.innerHTML = `<h2>Ingrese los datos de su tarjeta</h2>
  <form class="row g-3">
  <div class="col-md-3">
    <label for="validationDefault01" class="form-label">Número de tarjeta</label>
    <input type="number" class="form-control" id="validationDefault01" value="" placeholder="xxxx xxxx xxxx xxxx" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault02" class="form-label">Nombre y Apellido</label>
    <input type="text" class="form-control" id="validationDefault02" value="" placeholder="Tal cual figura en la tarjeta" required>
  </div>
  <div class="col-md-2">
    <label for="validationDefault02" class="form-label">Código de seguridad</label>
    <input type="number" class="form-control" id="validationDefault02" value="" placeholder="xxx" required>
  </div> 
  <div class="col-md-2">
    <label for="validationDefault02" class="form-label">Fecha de vencimiento</label>
    <input type="number" class="form-control" id="validationDefault02" value="" placeholder="MMAA" required>
  </div>  
  <div class="col-md-3">
    <label for="validationDefault03" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationDefault03" placeholder="ejemplo@masejemplo.com.ar" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault01" class="form-label">N° de contacto</label>
    <input type="number" class="form-control" id="validationDefault01" value="" placeholder="Número de área + Número telefónico" required>
  </div>  
  <div class="col-12">
    <button class="btn btn-primary" id="compraConfirmada" type="submit">Confirmar compra</button>
  </div>
</form>`;
  formularioSalida.appendChild(agregoFormularioFinal);  

  let compraConfirmadisima = document.getElementById("compraConfirmada");
  compraConfirmadisima.onclick = function(e) {  
    e.preventDefault();
    confirmandoCompra ();
  }

  

}

// SEGUNDA COMPRA

// AGREGO MAS COSAS AL CARRITO Y SE CREA NUEVA FILA
function segundaCompra () {

    //BOTÓN FINALIZAR COMPRA
    let botonDeConfirmar = document.getElementById("confirmandoCompra");
    botonDeConfirmar.onclick = function() {                  
        // ACA VA UN SWEET ALERT 2
        salidaFinal();      
    }

    //BOTÓN ELIMINAR CARRITO

    let botonEliminarCarrito = document.getElementById("eliminandoCompra");
 
    botonEliminarCarrito.onclick = function() {    
      
      SWEETeliminandoCarrito ();    
     
    } 

    // CLICK BOTÓN AGREGAR AL CARRITO
    agregarAlCarrito.onclick = function(e) {  
      e.preventDefault();      
  
      if (subTotal.placeholder === "$ -" || precioEntrada.placeholder === "$ -") {
        SWEETcarritoVacioError ();       
      } else {

        SWEETagregandoAlCarrito();           

        llenarCarrito.push(Number(subTotal.placeholder));
        console.log(llenarCarrito);     

        // SUMANDO VALORES DEL ARRAY
         let total = llenarCarrito.reduce((acumulador, elemento) => acumulador + elemento, 0);
        
        // LOCAL STORAGE
        let llenarCarritoStr = JSON.stringify(llenarCarrito)
        localStorage.setItem("carrito", llenarCarritoStr);

        // AGREGANDO FILAS
        let agregandoCosas = document.querySelector(".table-group-divider");
        let agregoFormulario = document.createElement("tr");
        agregoFormulario.innerHTML = `<tr>
        <th scope="row">${selectedOption2.value}</th>
        <td>${selectedOption.nombre}</td>
        <td>$ ${subTotal.placeholder}</td>
        <td>$ ${total}</td>
        </tr>`;
        agregandoCosas.appendChild(agregoFormulario); 

        renderizandoInputs ();  

      }
    }                      
     
} 



// BOTÓN AGREGAR AL CARRITO PREVIENE RECARGA DE PÁGINA, PUSHEA LO COMPRADO AL CARRITO, DESPLIEGA UNA TABLA CON LO ADQUIRIDO
let agregarAlCarrito = document.querySelector(".btn");

// PRIMER COMPRA
agregarAlCarrito.onclick = function(e) {  
    e.preventDefault();

    if (subTotal.placeholder === "$ -") {
      SWEETcarritoVacioError ();      
    } else {
      SWEETagregandoAlCarrito();      

      llenarCarrito.push(Number(subTotal.placeholder)); 

      // SUMANDO VALORES DEL ARRAY
      let total = llenarCarrito.reduce((acumulador, elemento) => acumulador + elemento, 0); 
      console.log(llenarCarrito);
      
      // LOCAL STORAGE
      let llenarCarritoStr = JSON.stringify(llenarCarrito)
      localStorage.setItem("carrito", llenarCarritoStr);

      //CREACIÓN DE TABLA CON PRODUCTOS DEL CARRITO
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
          <td>$ ${total}</td>
        </tr>      
      </tbody>
    </table>`;
      formularioFinal.appendChild(agregoFormulario);

      // CREACIÓN BOTONES 'FINALIZAR COMPRA' Y 'CONFIRMAR COMPRA'
      let botonNuevo = document.querySelector(".col-md-3");
      let botonConfirmar = document.createElement("button");
      botonConfirmar.innerHTML = `<button class="btn btn-primary" id="confirmandoCompra" type="submit">Finalizar Compra</button>`;  
      botonNuevo.appendChild(botonConfirmar);
      let botonNuevo2 = document.querySelector(".col-md-3");
      let botonEliminar = document.createElement("button");
      botonEliminar.innerHTML = `<button class="btn btn-primary" id="eliminandoCompra" type="submit">Eliminar carrito</button>`;  
      botonNuevo2.appendChild(botonEliminar);
    }       
    renderizandoInputs ();  
    segundaCompra(); 
}






