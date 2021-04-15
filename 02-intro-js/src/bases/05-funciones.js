// Funciones JS
const saludar = function( nombre ){
    return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

console.log(saludar3('Dani'));


const getUser = () => ({
    id: 'ABC1234',
    username: 'dani'
});

console.log(getUser());

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABCD1234',
    username: nombre
});


const usuarioActivo = getUsuarioActivo('Daniel');
console.log(usuarioActivo);