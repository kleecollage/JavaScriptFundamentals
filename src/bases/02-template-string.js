const nombre = 'Jhon';
const apellido = 'Doe';
const nombreCompleto = nombre + ' ' + apellido;
const saludo = `Hola 
${nombre } 
${ apellido }
${2 + 2}`;
console.log(saludo)

function getSaludo(nombreParam) {
    return 'Hola ' + nombreParam
}

console.log(`Este texto viene de una funcion: ${ getSaludo(nombre) }`)