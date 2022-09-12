import { Producto } from "./classProducto.js";

//variable donde guardo los productos
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

//Traigo los inputs
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let categoria = document.querySelector("#categoria");
let precio = document.querySelector("#precio");
let cantidad = document.querySelector("#cantidad");
let formProducto = document.querySelector("#formProducto");
let btnCrearProducto = document.querySelector("#btnCrearProducto");

// crear una instancia de la ventana modal
const modalAdminProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);

//variable para saber si estoy afregando o editando
let productoNuevo = true;

btnCrearProducto.addEventListener("click", crearProducto);
formProducto.addEventListener("submit", guardarProducto);

cargarInicial();

function cargarInicial() {
  console.log(listaProductos)
  if (listaProductos.length > 0) {
    //dibujar las filas de la tabla
    listaProductos.forEach((itemProducto) => {
      crearFila(itemProducto);
    });
  }
}

function crearFila(producto) {
  //esta funcion dibuja un tr
  let tablaProductos = document.querySelector("#tablaProductos");
  tablaProductos.innerHTML += `<tr>
      <th scope="row">${producto.codigo}</th>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.categoria}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.cantidad}</td>
      <td>
        <button class="btn btn-warning" onclick='editarproducto("${producto.codigo}")' >
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn-danger" onclick='borrarproducto("${producto.codigo}")'>
        <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>`;
}

function crearProducto() {
  //volver asignar a la variable booleana el valor true
  productoNuevo = true;
  //limpiar el formulario
  limpiarFormulario();
  //mostrar ventana modal
  modalAdminProducto.show();
  //generar el identificador unico y asignarlo al campo del codigo
  codigo.value = uuidv4();
  // console.log( uuidv4()); esta libreria genera identificadores unicos
}

function guardarProducto(e) {
  e.preventDefault();
  //volver a validar todos los campos

  if (productoNuevo) {
    generarProductoNuevo();
  } else {
  //  actualizarProducto();
  }
}

function generarProductoNuevo() {
  //si los datos son correctos
  let nuevoProducto = new Producto(
    codigo.value,
    nombre.value,
    descripcion.value,
    imagen.value,
    precio.value,
    cantidad.value,
    categoria.value
  );
  console.log(nuevoProducto);
  listaProductos.push(nuevoProducto);
  //guardar el arreglo en localstorage
  guardarProductosEnLocalStorage();
  //limpiar formulario
  limpiarFormulario();
  // console.log(listaProductos);
  //dibujar la fila en la tabla
  crearFila(nuevoProducto);
  //cerrar la ventana modal
  modalAdminProducto.hide();
}

function limpiarFormulario() {
  formProducto.reset();
  // modificar las clases de bootstrap si es necesario
}

function guardarProductosEnLocalStorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}
