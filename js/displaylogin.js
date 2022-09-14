
let div_iniciar = document.getElementById('iniciar');
let div_registrar = document.getElementById('registrarme');

function registrarme(){
    if(div_registrar.style.display == 'block'){
        div_registrar.style.display = 'block';
    }else{
        div_iniciar.style.display = 'none';
        div_registrar.style.display = 'block';
    }
}

function iniciar(){
    if(div_iniciar.style.display == 'block'){
        div_iniciar.style.display = 'block';
    }else{
        div_iniciar.style.display = 'block';
        div_registrar.style.display = 'none';
    }
}