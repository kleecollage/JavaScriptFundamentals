import React, { useContext } from 'react';
// Desestructuración
// Asignacion desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado'
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
// extraemos el nombre al array y le asignamos el nombre "nombre2"
const {nombre: nombre2, clave, edad} = persona;
console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    console.log(usuario)
}
retornaPersona(persona)

// se recomienda extraer directamente las propiedades del objeto
const retornaPersona2 = ({nombre, edad, rango = 'Capitan'}) => { // asignamos un valor por defecto a "rango"
    console.log(nombre, edad, rango);
}
retornaPersona2(persona)

const retornaPersona3 = ({nombre, edad, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: -1.5588,
            lng: 8.25564,
        }
    }
}
const {nombreClave, anios, latlng:{lat,lng}} = retornaPersona3(persona)
console.log(nombreClave, anios)
console.log(lat, lng)

// forma mas comun
const {nombreClave2, anios2, latlng} = retornaPersona3(persona);
const { lat2, lng2 } = latlng; 
console.log(nombreClave2, anios2, lat2, lng2);