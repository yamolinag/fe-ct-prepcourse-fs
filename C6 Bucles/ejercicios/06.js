function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
let cantidadDigitos = num.toString().length;
return(cantidadDigitos === 3)
}

module.exports = tieneTresDigitos;