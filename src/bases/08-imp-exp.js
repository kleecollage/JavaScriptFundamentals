// import { heroes } from './data/heroes' // snippet = imp
// import {heroes} from "./data/heroes" // escribiendo el nombre del const aparece automaticamente
// import { heroes, owners } from './data/heroes
import heroes, { owners } from "../data/heroes"; // se debe poner el impor t default sin corchetes

// console.log(owners);
// console.log(heroes);

export const getHeroeById = (id) => {
	return heroes.find((heroe) => heroe.id === id);
};
// console.log(getHeroeById(4));

export const getHeroesByOwner = (owner) =>
	heroes.filter((heroes) => heroes.owner === owner);
// console.log(getHeroesByOwner("Marvel"));
