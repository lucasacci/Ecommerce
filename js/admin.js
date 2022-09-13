
import { Producto } from "./classProducto.js";
import { cantidadCaracteres, validarDescri, validarImagen, validarNumeros, validarPrecio} from './helpers.js'

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
nombre.addEventListener("blur", () =>{cantidadCaracteres(nombre)})
precio.addEventListener("blur", () =>{validarPrecio(precio)})
cantidad.addEventListener("blur", () =>{validarNumeros(cantidad)})
imagen.addEventListener("blur", () =>{validarImagen(imagen)})
descripcion.addEventListener("blur", () =>{validarDescri(descripcion)})

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
  console.log(producto.precio)
  let tablaProductos = document.querySelector("#tablaProductos");
  tablaProductos.innerHTML += `<tr>
      <th scope="row">${producto.codigo}</th>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.categoria}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.cantidad}</td>
      <td>
        <button class="btn btn-warning" onclick='editarProducto("${producto.codigo}")' >
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn-danger" onclick='borrarProducto("${producto.codigo}")'>
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
  if(cantidadCaracteres(nombre)&&validarPrecio(precio)&&validarNumeros(cantidad)&&validarImagen(imagen)&&validarDescri(descripcion)){
    if (productoNuevo) {
      generarProductoNuevo();
    } else {
      actualizarProducto();
    }
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salio mal!',
    })
  }
}

function generarProductoNuevo() {
  //si los datos son correctos
  let nuevoProducto = new Producto(
    codigo.value,
    nombre.value,
    precio.value,
    categoria.value,
    imagen.value,
    descripcion.value,
    cantidad.value
  );
  console.log(nuevoProducto);
  listaProductos.push(nuevoProducto);
  //guardar el arreglo en localstorage
  guardarProductosEnLocalStorage();
  //limpiar formulario
  limpiarFormulario();
  //dibujar la fila en la tabla
  crearFila(nuevoProducto);
  //cerrar la ventana modal
  modalAdminProducto.hide();
}

function limpiarFormulario() {
  formProducto.reset();
}

function guardarProductosEnLocalStorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}


window.borrarProducto = function (codigo) {
  //mostrar una pregunta al usuario
  Swal.fire({
    title: "Eliminar producto",
    text: "Esta seguro de eliminar el producto, este proceso no se puede revertir",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //buscar el producto en el arreglo y borrarlo
      let copiaListaProductos = listaProductos.filter(
        (itemProducto) => itemProducto.codigo != codigo
      );
      listaProductos = copiaListaProductos;
      //actualizar el localstorage
      guardarProductosEnLocalStorage();
      //actualizar la tabla
      borrarTabla();
      cargarInicial();

      // mostrar mensaje de operacion correcta
      Swal.fire(
        "Producto eliminado",
        "El Producto seleccionado fue correctamente eliminado",
        "success"
      );
    }
  });
};

function borrarTabla() {
  let tablaProductos = document.querySelector("#tablaProductos");
  tablaProductos.innerHTML = "";
}

window.editarProducto = function (codigoBuscado) {
  //cambiar el estado de la variable booleada productoNuevo
  productoNuevo = false;
  //buscar dentro del arreglo la producto que quiero editar
  let productoBuscada = listaProductos.find(
    (producto) => producto.codigo === codigoBuscado
  ); 
  console.log(productoBuscada);
  //mostrar la ventana modal con el formulario cargado con todos los datos de la producto que selecciono el usuario
  modalAdminProducto.show();
  codigo.value = productoBuscada.codigo;
  nombre.value = productoBuscada.nombre;
  precio.value = productoBuscada.precio;
  categoria.value = productoBuscada.categoria;
  imagen.value = productoBuscada.imagen;
  descripcion.value = productoBuscada.descripcion;
  cantidad.value = productoBuscada.cantidad;
};

function actualizarProducto() {
  console.log("actualizando producto...");
  //tomar todos los datos cargados del formulario, buscar el objeto que estoy mostrando en el formulario y actualizar sus valores
  let posicionProductoBuscada= listaProductos.findIndex((producto)=> codigo.value === producto.codigo )
  console.log(posicionProductoBuscada);
  //modificar los valores dentro del arreglo
  listaProductos[posicionProductoBuscada].nombre = nombre.value;
  listaProductos[posicionProductoBuscada].precio = precio.value;
  listaProductos[posicionProductoBuscada].descripcion = descripcion.value;
  listaProductos[posicionProductoBuscada].imagen = imagen.value;
  listaProductos[posicionProductoBuscada].categoria = categoria.value;
  listaProductos[posicionProductoBuscada].cantidad = cantidad.value;
  
  //actualizar el localstorage
  guardarProductosEnLocalStorage()
  //actualizar la tabla
  borrarTabla();
  cargarInicial();
  //mostrar un mensaje intuitivo para el usuario
  Swal.fire(
    'Producto actualizado',
    'Los datos del producto seleccionado fueron actualizados',
    'success'
  )
  //cerrar la ventana modal
  modalAdminProducto.hide();
  //limpiar el formulario
  limpiarFormulario();

}
