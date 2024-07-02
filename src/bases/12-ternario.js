const activo = true;
let mensaje = '';
if (activo) {
    mensaje = 'Actvo'
} else {
    mensaje = 'Inactivo'
}
//optimizacion del codigo anterior:
const mensaje2 = ( activo ) ? 'Activo' : 'Inactivo'
const mensaje3 = activo ? 'Activo' : null ;
const mensaje4 = activo && 'Activo' // esto es lo mismo y el resultado es ${valor} o false
// mensaje4 se evalua como: true && 'Activo'
console.log(mensaje, mensaje2, mensaje3, mensaje4)