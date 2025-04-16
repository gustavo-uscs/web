function calcular(e) {
    e.preventDefault()

    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)
    const result = document.getElementById("result")

    const sum = n1 + n2

    if (sum > 20) {
        result.innerHTML = `${sum} + 8 = ${sum + 8}`
    } else {
        result.innerHTML = `${sum} - 5 = ${sum - 5}`
    }
    
}

const form = document.getElementById("form")

form.addEventListener("submit", calcular)