

let list = JSON.parse(localStorage.getItem('listaProductosKey')) || [];
let padre = document.querySelector("#seccionPadre");

if(list.length > 0){

    list.map((el)=>{
     crearColumna(el);
    })

}else{
    // mostrar mensaje si no hay productos cargados
    padre.innerHTML = ' <h1 class="text-center">No hay productos cargados</h1>'
}

function crearColumna(el){


    padre.innerHTML += `
    <div class="wrapper">
    <div class="container">
      <div class="top">${el.imagen}</div>
      <div class="bottom">
        <div class="left">
          <div class="details">
            <h1>${el.nombre}</h1>
            <p>${el.precio}</p>
          </div>
          <div class="buy"><i class="fa-solid fa-cart-plus"></i></div>
        </div>
        <div class="right">
          <div class="done"><i class="material-icons">done</i></div>
          <div class="details">
            <h1>${el.nombre}</h1>
            <p>Added to your cart</p>
          </div>
          <div class="remove"><i class="material-icons">clear</i></div>
        </div>
      </div>
    </div>
    <div class="inside">
      <div class="icon"><i class="fa-solid fa-circle-info fs-3"></i></div>
      <div class="contents">
        </table>
      </div>
    </div>
  </div>`;

}

function verDetalle (codigo){

  console.log(window.location.origin+'/pag/detalle.html?codigo='+code);
  window.location.href = window.location.origin+'/pag/detalle.html?codigo='+codigo;

}


// card

$('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });