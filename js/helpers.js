export function cantidadCaracteres (input){
    if(input.value.length>=3 && input.value.length<=30){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarNumeros (input){
    
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true
    }else{
        input.className = 'form-control is-invalid';
        return false
    }
}

export function validarPrecio (input){
    

    let patron = /^[\d]{1,4}(\.[\d]{1,2})?$/;
    console.log(patron.test(input.value))
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true
    }else{
        input.className = 'form-control is-invalid';
        return false
    }
}

export function validarImagen (input){
    
    let patron = /^.*\.(jpg|gif|png|jpeg)$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true
    }else{
        input.className = 'form-control is-invalid';
        return false
    }
}

export function validarDescri (input){
    
    if(input.value.length>=5){
        input.className = 'form-control is-valid';
        return true
    }else{
        input.className = 'form-control is-invalid';
        return false
    }
}