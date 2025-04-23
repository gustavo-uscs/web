function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero').value);
    
    if (numero < 0) {
        alert('Por favor, digite um número não negativo!');
        return;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById('resultado').textContent = `O fatorial de ${numero} é: ${fatorial}`;
} 