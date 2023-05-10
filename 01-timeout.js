const temporizador = (cb) => {
    // setTimeout(cb, 0);
    setInterval(cb, 1500)
}

const operacion = () => console.log('Ejecutar operacion')

console.log('Iniciar proceso')
// console.log('Realizar operacion')
// operacion()
temporizador(operacion)
console.log('Finalizar proceso')