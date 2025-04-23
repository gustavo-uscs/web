function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function encontrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    
    if (inicio > fim) {
        alert('O valor inicial deve ser menor ou igual ao valor final!');
        return;
    }

    const primos = [];
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length === 0) {
        document.getElementById('resultado').textContent = 'Não foram encontrados números primos no intervalo.';
    } else {
        document.getElementById('resultado').textContent = `Números primos encontrados: ${primos.join(', ')}`;
    }
} 