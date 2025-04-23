function validarCPF() {
    const cpf = document.getElementById('cpf').value;

    if (!/^\d{11}$/.test(cpf)) {
        document.getElementById('resultado').textContent = 'CPF inválido! Digite exatamente 11 números.';
        return;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        document.getElementById('resultado').textContent = 'CPF inválido!';
        return;
    }

    let soma = 0;
    
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    
    let resto = (soma * 10) % 11;
    
    if (resto === 10) resto = 0;
    
    if (resto !== parseInt(cpf.charAt(9))) {
        document.getElementById('resultado').textContent = 'CPF inválido!';
        return;
    }

    soma = 0;
    
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    
    if (resto === 10) resto = 0;
    
    if (resto !== parseInt(cpf.charAt(10))) {
        document.getElementById('resultado').textContent = 'CPF inválido!';
        return;
    }

    document.getElementById('resultado').textContent = 'CPF válido!';
} 