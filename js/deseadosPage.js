
let deseados = JSON.parse(localStorage.getItem('listaDeseadosKey')) || [];




let padre = document.querySelector("#seccionPadre");



if(deseados.length > 0){

   deseados.map((el)=>{
    console.log(el)
    crearColumna(el)
   })

}else{
    // mostrar mensaje si no hay productos cargados
    padre.innerHTML = ' <h1 class="text-center">No hay productos cargados</h1>'
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
                        <div class="wcf-right mx-2"><a href="#" class="buy-btn" onclick="guardarDeseado()"><i class="fa-regular fa-heart"></i></a></div>
                      </div>
                    </div>
                  </div>`;

}