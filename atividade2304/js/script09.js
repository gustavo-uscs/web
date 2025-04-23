function classificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let classificacao = '';

    if (idade <= 0) {
        alert('Por favor, digite uma idade válida!');
        return;
    }

    if (idade <= 12) {
        classificacao = 'Criança';
    } else if (idade <= 17) {
        classificacao = 'Adolescente';
    } else if (idade <= 59) {
        classificacao = 'Adulto';
    } else {
        classificacao = 'Idoso';
    }

    document.getElementById('resultado').textContent = `Classificação: ${classificacao}`;
} 