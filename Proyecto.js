const USUARIO_REGISTRADO = "Faksu";
const CONTRASENIA_REGISTRADA = "123";

let usuarioIngresado = "usuario por def";
let contraseniaIngresada = "contraseña por def";

function verificacion(){
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contraseniaIngresada = document.querySelector('#contrasenia_ingresada').value;
}

if( (usuarioIngresado == USUARIO_REGISTRADO) && (contraseniaIngresada == CONTRASENIA_REGISTRADA)){
    document.querySelector('#mensaje_resultado').innerHTML = `
        <h1> Bienvenido ${usuarioIngresado} </1>
        `;
}else{
    document.querySelector('#mensaje_resultado').innerHTML = `
        <h1> Usuario y/o contraseña incorrectos! </h1>
    `;
}