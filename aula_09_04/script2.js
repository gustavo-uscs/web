function calcularComVar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var soma = num1 + num2;

    if (isNaN(soma)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado com var: " + soma;
    }
}

function calcularComLet() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let soma = num1 + num2;

    if (isNaN(soma)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado com let: " + soma;
    }
}

function calcularComConst() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const soma = num1 + num2;

    if (isNaN(soma)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado com const: " + soma;
    }
}