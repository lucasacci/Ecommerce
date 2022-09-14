

let list = JSON.parse(localStorage.getItem('listaProductosKey')) || [];
let padre = document.querySelector("#seccionPadre");
let deseados = [];

let buscador = document.querySelector('#buscador');

// buscador.addEventListener('onchange');


if(list.length > 0){

    list.map((el)=>{
     crearColumna(el);
    })

}else{
    // mostrar mensaje si no hay productos cargados
    padre.innerHTML = ' <h3 class="text-center">No hay productos cargados</h3>'
}

function crearColumna(el){


    padre.innerHTML += `
    <div class="col-md-3" id="seccionPadre">
                  <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                      <img src="${el.imagen}" alt="Product" class="img-responsive" />
                    </div>
                    <div class="wsk-cp-text">
                      <div class="category">
                        <span>${el.categoria}</span>
                      </div>
                      <div class="title-product">
                        <h3>${el.nombre}</h3>
                      </div>
                      <div class="card-footer">
                        <div class="wcf-left"><span class="price">$${el.precio}</span></div>
                        <div class="wcf-right"><a href="#" class="buy-btn" onclick="verDetalle('${el.codigo}')"><i class="fa-solid fa-info"></i></a></div>
                        <div class="wcf-right mx-2"><a href="#" class="buy-btn" onclick="guardarDeseado('${el.codigo}')"><i class="fa-regular fa-heart"></i></a></div>
                      </div>
                    </div>
                  </div>`;

}

function verDetalle (codigo){

  console.log(window.location.origin+'/pag/detalle.html?codigo='+codigo);
  window.location.href = window.location.origin+'/pag/detalle.html?codigo='+codigo;

}


// card


  function guardarDeseado(codigo){
    
   
    let aux = list.find(
      (el) => el.codigo === codigo
    );

    deseados.push(aux);


    localStorage.setItem("listaDeseadosKey", JSON.stringify(deseados));

    Swal.fire(
      'Producto agregado',
      'Agregado a lista de deseos!',
      'success'
    )
  }