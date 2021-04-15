const personajes = ['Goku', 'Vegetta', 'Trunks'];

const [ p1 ] = personajes; //primer personaje

const [ ,p2 ] = personajes; // segundo personaje

const [ , ,p3 ] = personajes; // tercer personaje

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

const useNombre = (valor) => {
    return [ valor, ()=>{console.log('Hola mundo')} ];
}

const [nombre, setNombre ] = useNombre('Dani');

console.log(nombre);
setNombre();

