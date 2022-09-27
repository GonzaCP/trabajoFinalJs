const vaciarCarrito = [];
let llenarCarrito = [];
let total = 0


const bandas = [
    {nombre: "Queen", fecha: "15-12-1986", hora: "22.00", lugar: "Wembley Stadium", precio: 1500},
    {nombre: "Pink Floyd", fecha: "15-12-2022", hora: "21.00", lugar: "Casino Magic", precio: 500},    
    {nombre: "Red Hot Chili Peppers", fecha: "30-10-2022", hora: "22", lugar: "Slane Castle", precio: 1000}
]; 

// RELLENANDO CARRITO
//bandas.forEach((producto) => (total += producto.precio))

// FUNCION ELECCION CANTIAD DE ENTRADAS

function eligiendoCantidadEntradasQueen () {       
    let agregarAlCarrito = document.getElementById("carritoQueen").value;
    switch (agregarAlCarrito) {
        case(agregarAlCarrito):
        let cantidad = bandas[0].precio * agregarAlCarrito;                     
    }
}

function eligiendoCantidadEntradasPink () {       
    let agregarAlCarrito = document.getElementById("carritoPink").value;
    switch (agregarAlCarrito) {
        case(agregarAlCarrito):
        let cantidad = bandas[1].precio * agregarAlCarrito;                                 
    }
}

function eligiendoCantidadEntradasRed () {       
    let agregarAlCarrito = document.getElementById("carritoRed").value;
    switch (agregarAlCarrito) {
        case(agregarAlCarrito):
        let cantidad = bandas[2].precio * agregarAlCarrito;   
    }
    
   
}


// FUNCION DESPLIEGUE FORMULARIO AL TOCAR EL BOTON + info
function formularioCompraEntradasQueen () {
    let comprar = document.getElementById("selectorQueen");
    comprar.innerHTML = `<h3>${bandas[0].nombre}</h3>
    <p>${bandas[0].lugar}</p>
    <p>${bandas[0].fecha}</p>
    <p>${bandas[0].hora} hs.</p>
    <p>$ ${bandas[0].precio} c/u.</p>
    <button id="queen" type="submit" >+ info</button>
    <form>
    <select id="carritoQueen" name="producto" onchange="eligiendoCantidadEntradasQueen();">
    <option selected>Ingrese la cantidad de entradas que desea comprar</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <button class="carrito" type="submit">Agregar al carrito</button>   
    </form>`;    
}
function formularioCompraEntradasPink () {
    let comprar = document.getElementById("selectorPink");
    comprar.innerHTML = `<h3>${bandas[1].nombre}</h3>
    <p>${bandas[1].lugar}</p>
    <p>${bandas[1].fecha}</p>
    <p>${bandas[1].hora} hs.</p>
    <p>$ ${bandas[1].precio} c/u.</p>
    <button id="pink" type="submit" >+ info</button>
    <form>
    <select id="carritoPink" name="producto" onchange="eligiendoCantidadEntradasPink();">
    <option selected>Ingrese la cantidad de entradas que desea comprar</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <button class="carrito" type="submit">Agregar al carrito</button>   
    </form>`;    
}
function formularioCompraEntradasRhcp () {
    let comprar = document.getElementById("selectorRed");
    comprar.innerHTML = `<h3>${bandas[2].nombre}</h3>
    <p>${bandas[2].lugar}</p>
    <p>${bandas[2].fecha}</p>
    <p>${bandas[2].hora} hs.</p>
    <p>$ ${bandas[2].precio} c/u.</p>
    <button id="rhcp"type="submit" >+ info</button>
    <form>
    <select id="carritoRed" name="producto" onchange="eligiendoCantidadEntradasRed();">
    <option selected>Ingrese la cantidad de entradas que desea comprar</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <button class="carrito" type="submit">Agregar al carrito</button>   
    </form>`;    
}

// EVENTO CLICK EN + INFO
let botonMasInfo = document.querySelectorAll("button");

botonMasInfo[1].onclick = () => {  
    formularioCompraEntradasQueen ();      
}
botonMasInfo[2].onclick = () => {
    formularioCompraEntradasPink ();
}
botonMasInfo[3].onclick = () => {
    formularioCompraEntradasRhcp ();    
}


// EVENTO CLICK EN AGREGAR AL CARRITO


let btnAgregarAlCarrito = document.querySelectorAll(".carrito");
btnAgregarAlCarrito.onclick = (e) => {
    e.preventDefault ();
        console.log("Diste click");
    
}











// CLICK EN AGREGAR AL CARRITO









   
//agrega valor al final del array
//bandas.push(true);
// agrega valor al principio del array
//bandas.unshift(25);



/* OPERADOR TERNARIO */

/* 
let precio = 50;
if (precio < 40) {
    console.log("El producto es accesible");
} else {
    console.log("El producto es costoso");
}

let precio = 50
precio < 40?console.log("El producto es accesible"): console.log("EL producto es costoso");
*/



