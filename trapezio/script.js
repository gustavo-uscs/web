function calcular(e) {
    e.preventDefault()

    const B = Number(document.getElementById("bigger-base").value)
    const b = Number(document.getElementById("smaller-base").value)
    const h = Number(document.getElementById("height").value)
    const result = document.getElementById("result")

    const area = ((B + b) * h) / 2

    result.innerHTML = `Área: ${area}`;
}

const form = document.getElementById("form")

form.addEventListener("submit", calcular)