import { getHeroeById } from './bases/08-import';

// console.log(getHeroeById(2));

// const promesa = new Promise( ( resolve, reject ) => {
//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         // resolve(p1);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe:', heroe);
// })
// .catch( err => console.warn(err) );

const getHeroeByIdAsinc = (id) => {

    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
                if( p1 != undefined){
                    resolve(p1)
                }else{
                    reject('No se pudo encontrar el heroe');
                }
        }, 2000);
    });

}

getHeroeByIdAsinc(1)
    .then(console.log)
    .catch( console.warn)