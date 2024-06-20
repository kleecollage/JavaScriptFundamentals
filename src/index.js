//import { heroes } from './data/heroes' // snippet = imp
import { heroes } from "./data/heroes" // escribiendo el nombre del const aparece automaticamente

console.log( heroes )

const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
}
console.log(getHeroeById(4))

const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner)
console.log(getHeroesByOwner('Marvel'))

