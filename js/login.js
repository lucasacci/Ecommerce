document.querySelector('#btnLogin').addEventListener("click", iniciarSesion);
document.querySelector('#formInicio').addEventListener('submit',iniciar);
let isAdmin = false;

const modalLogin = new bootstrap.Modal(
    document.querySelector("#modalMedialuna")
  );

function iniciarSesion(){
    limpiarFormulario();
    modalLogin.show();
}

function limpiarFormulario() {
    formInicio.reset();
  }

function iniciar(e){
    e.preventDefault();

    usuario = document.querySelector('#usuario').value;
    contraseña = document.querySelector('#contraseña').value;

    if(usuario === 'usuario' && contraseña === 'usuario'){
        isAdmin = false;
        modalLogin.hide();
    }else if(usuario === 'admin' && contraseña === 'admin'){
        isAdmin = true;
        modalLogin.hide();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrecto',
          })
    }

    if(isAdmin){
        let listaNav = document.querySelector('#listaNav');
        console.log(listaNav.children[1]);
        console.log(listaNav.firstChild);
        let insertar = document.createElement('li');
        insertar.innerHTML = `<a class="nav-link" href="pages/admin.html">Administracion</a>`;
        insertar.className = 'nav-item';
        listaNav.insertBefore(insertar,listaNav.children[1]);
    //     let insertar = `<li class="nav-item">
    //     <a class="nav-link" href="pages/admin.html">Administracion</a>
    //   </li>`;
    //     listaNav.insertBefore(insertar,listaNav[1])
    
    }
    
    console.log(isAdmin)

}
