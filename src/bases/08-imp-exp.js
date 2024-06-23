// import { heroes } from './data/heroes' // snippet = imp
// import {heroes} from "./data/heroes" // escribiendo el nombre del const aparece automaticamente
// import { heroes, owners } from './data/heroes' // esto se logra con el export default en la data
import heroes, { owners } from './data/heroes'

console.log(owners)
console.log( heroes )

const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
}
console.log(getHeroeById(4))

const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner)
console.log(getHeroesByOwner('Marvel'))

