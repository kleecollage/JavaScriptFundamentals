// Funciones en JS
const saludar = function(nombreParam) {
    return `Hola ${nombreParam}` 
};

console.log( saludar );

// funciones flecha
const saludarFlecha = (nombreParam) => {
    return `Hola ${nombreParam}`;
};
console.log(saludarFlecha('Vegetta'));

const saludarFlecha2 = (nombreParam) => `Hola ${nombreParam}`;
console.log(saludarFlecha2('Goku'));

const saludarFlecha3 = () => `Hola Mundo`;
console.log(saludarFlecha3());

const getUser = () => ({
        uid: 'ABC123',
        username: 'tilinazo73'
})
console.log(getUser())

function getUsuarioActivo(usernameParam) {
    return {
        uid: 'PENE123',
        username: usernameParam
    }
};
const usuarioActivo = getUsuarioActivo('Fercha');
console.log(usuarioActivo)

const getUsuarioActivoFlecha = (usuarioParam) => ({
    uid: 'CACA334',
    username: usuarioParam
});
console.log(getUsuarioActivoFlecha('Bobo'))