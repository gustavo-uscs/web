let numeroSecreto;

function novoJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    document.getElementById('palpite').value = '';
    document.getElementById('dica').textContent = '';
}

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    
    if (palpite < 1 || palpite > 10) {
        alert('Por favor, digite um número entre 1 e 10!');
        return;
    }

    if (palpite === numeroSecreto) {
        document.getElementById('dica').textContent = 'Parabéns! Você acertou!';
    } else if (palpite < numeroSecreto) {
        document.getElementById('dica').textContent = 'Tente um número maior!';
    } else {
        document.getElementById('dica').textContent = 'Tente um número menor!';
    }
}

window.onload = novoJogo; 