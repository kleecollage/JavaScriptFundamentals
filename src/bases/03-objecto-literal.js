const persona = {
    nombre: 'Tony',
    apellido: 'Cross',
    edad: 35,
    direccion: {
        city: 'Berlin',
        zip: 112233,
        lat: 5.8876,
        lon: 2.2558
    }
};
console.log({ 
    persona: persona
});
console.table({ persona });

const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);

const persona3 = {...persona}; // con el operador spread "..." se extrae el objeto
persona3.nombre = 'Bruce';
console.log(persona3);