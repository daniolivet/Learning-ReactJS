const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'NY',
        Zip: 55324,
        lat: 14.3232,
        lng: 34.9292
    }
};

console.table(persona);

// Creamos un clon
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);