// Desestructuracion

const persona  = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave)

const returnPersona = ({ nombre, rango = 'Capitán' }) => {

    // console.log(nombre, rango);
    return {
        nombreClave: nombre,
        rango: rango,
        latlng: {
            lat: 14.000,
            lng: -12.000
        }
    }

}


const { nombreClave, rango, latlng: { lat, lng } } = returnPersona(persona);
console.log(nombreClave, rango, lat, lng);