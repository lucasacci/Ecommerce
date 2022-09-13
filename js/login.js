document.querySelector('#iniciarsesion').addEventListener('click',iniciar);

function iniciar(){
    let nuevaPersona = [],
     usuario ='',
     contraseña = '';

     usuario = document.querySelector('#nombreApellido').value;
     contraseña = document.querySelector('#password').value;

     console.log('Usuario '+ usuario);
    console.log('Contraseña '+ contraseña);
     
    /* nuevaPersona.push(usuario,contraseña)
     listaAdministradores (nuevaPersona);*/
}

/*function mosrtrarDatos(){
    let personas = getlistaAdministradores()
}*/