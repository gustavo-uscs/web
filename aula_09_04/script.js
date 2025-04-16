function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var soma = num1 + num2;

    if (isNaN(soma)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "A soma é: " + soma;
    }
}