import heroes, { owners }  from '../data/heroes';

console.log(owners);

const getHeroeById = (id) => heroes.find(heroes => heroes.id === id);

const getHeroesByOwner = (owner) => heroes.filter( heroes => heroes.owner === owner );

export { getHeroeById };