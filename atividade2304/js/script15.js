function converterTempo() {
    const horas = parseFloat(document.getElementById('horas').value);
    
    if (horas < 0) {
        alert('Por favor, digite um número não negativo!');
        return;
    }

    const minutos = horas * 60;
    const segundos = minutos * 60;

    document.getElementById('resultado').textContent = 
        `${horas} hora(s) equivale a:\n` +
        `${minutos.toFixed(2)} minutos\n` +
        `${segundos.toFixed(2)} segundos`;
} 