let parametro = window.location.search


let urlParametro =new URLSearchParams(parametro)


let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey'))||[];
let productoBuscada= listaProductos.find ((productos)=> productos.codigo === urlParametro.get('codigo'))


let seccionDetalle = document.querySelector('#seccionDetalle');
seccionDetalle.innerHTML = `<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${productoBuscada.imagen}" class="img-fluid rounded-start" alt="${productoBuscada.nombre}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${productoBuscada.nombre}</h5>
      <p class="card-text">${productoBuscada.descripcion}</p>
      <p class="card-text">Genero: <span class="badge rounded-pill bg-info">${productoBuscada.categoria}</span></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>`;