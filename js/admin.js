import { Pelicula } from "./classPelicula.js";

let codigo = document.querySelector("#codigo");
let titulo = document.querySelector("#titulo");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let genero = document.querySelector("#genero");
let formPelicula = document.querySelector("#formPelicula");
let btnCrearPelicula = document.querySelector("#btnCrearPelicula");
// crear una instancia de la ventana modal
const modalAdminPelicula = new bootstrap.Modal(
  document.querySelector("#modalPelicula")
);