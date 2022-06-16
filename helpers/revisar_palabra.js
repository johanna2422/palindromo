const revisarPalabra = async (palabra) => {

    const nuevaPalabra = palabra.replace(/[\W_]/g,'').toLowerCase();
    const palabraRevisada = nuevaPalabra.split('').reverse().join('');
  
    console.log(nuevaPalabra === palabraRevisada ? 'es palindromo' : 'no es palindromo');

}

module.exports = {
    revisarPalabra
}