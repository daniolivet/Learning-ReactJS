const activo = true;
let mensaje = '';

// Normal Way
if( !activo ){
    mensaje = 'Activo';
}else {
    mensaje = 'Inactivo';
}

// Ternario
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
const mensaje = activo && 'Activo'; // Just for 1 condition without else


console.log(mensaje);