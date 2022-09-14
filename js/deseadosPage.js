
let deseados = JSON.parse(localStorage.getItem('listaDeseadosKey')) || [];




let padre = document.querySelector("#seccionPadre");



function cargaInicial(){

    
    if(deseados.length > 0){
    
       deseados.map((el)=>{
        console.log(el)
        crearColumna(el)
       })
    
    }else{
        // mostrar mensaje si no hay productos cargados
        padre.innerHTML = ' <h3 class="text-center">No hay productos deseados</h3>'
    }

}

cargaInicial();

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
                        <div class="wcf-right"><a href="#" class="buy-btn" onclick="eliminarDeseado('${el.codigo}')"><i class="fa-solid fa-heart-crack"></i></a></div>
                      </div>
                    </div>
                  </div>`;

}

function eliminarDeseado(codigo){

    console.log(codigo)

    let listaCopia = deseados.filter((el) => el.codigo != codigo);

    deseados = listaCopia;

    localStorage.setItem('listaDeseadosKey', JSON.stringify(listaCopia));

    borrarCard();
    cargaInicial();

    Swal.fire(
        'Producto eliminado',
        'Eliminado con exito',
        'success'
      )
}

function borrarCard(){
    padre.innerHTML = "";
}

let isAdmin = JSON.parse(localStorage.getItem("keyAdmin")) || false;
console.log(isAdmin)
if(isAdmin){
    let listaNav = document.querySelector('#listaNav');
    console.log(listaNav.children[1]);
    console.log(listaNav.firstChild);
    let insertar = document.createElement('li');
    insertar.innerHTML = `<a class="nav-link" href="./admin.html">Administracion</a>`;
    insertar.className = 'nav-item';
    listaNav.insertBefore(insertar,listaNav.children[1]);
   
//     let insertar = <li class="nav-item">
//     <a class="nav-link" href="pages/admin.html">Administracion</a>
//   </li>;
//     listaNav.insertBefore(insertar,listaNav[1])

}