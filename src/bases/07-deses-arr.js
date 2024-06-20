const personajes =  ['Goku', 'Vegeta', 'Trunks'];   
const [ , ,p3 ] = personajes
console.log( p3 )

const regresaArreglo = () => ['abc', 123]
const [letras, numeros] = regresaArreglo();
console.log(letras, numeros)

const myUseState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}]
};
const arr = myUseState('Goku');
console.log(arr);
arr[1]()

// desestructuracion de objetos {}
// desestructuracion de arrays []
const tarea = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}]
};
const [nombre, setNombre] = tarea('Juan')
console.log(nombre)
setNombre()