function somarPares() {
    const limite = parseInt(document.getElementById('limite').value);
    
    if (limite < 1) {
        alert('Por favor, digite um número maior que 0!');
        return;
    }

    let soma = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    document.getElementById('resultado').textContent = `A soma dos números pares de 1 até ${limite} é: ${soma}`;
} 