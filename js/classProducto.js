export class Producto{
    constructor(codigo, nombre, precio, categoria, imagen, descripcion, cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = cantidad;
    }
}