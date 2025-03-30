// RETO 01
// Capturar el boton 
// Crear una function que muestre un 
// propmt("Introduce tu estatura")
// propmt("Introduce tu peso")
let btnIMC = document.querySelector("#calcIMC");
let divDOM = document.querySelector("#resultado")

function calcIMC() {
    let estatura = prompt("Introduce tu estatura en metros (ejemplo: 1.75)")
    let peso = prompt("Introduce tu peso en kilogramos (ejemplo: 70)")
    let IMCresult = peso / (estatura * estatura)
    // Validación de datos
    if (isNaN(estatura) || isNaN(peso) || estatura <= 0 || peso <= 0) {
        alert("Por favor ingresa valores válidos para la estatura y el peso")
        return // Salir de la función sin hacer cálculos
    }

    if (IMCresult <= 18.5) {
        divDOM.innerHTML = `
                        <img src="https://static5.depositphotos.com/1040226/462/i/450/depositphotos_4625907-stock-photo-ashamed-shirtless-teenager.jpg" class="resultado-img"></img>
                        <h2 class="Bajo">Bajo</h2>
      `
    } else if (IMCresult <= 24.9) {
        divDOM.innerHTML = `
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPI2fdC8ZjYJvVwbZBYfEyJatIhjNO3CUSIw&s" class="resultado-img"></img>
                        <h2 class="Normal">Normal</h2>
    `
    } else if (IMCresult <= 29.9) {
        divDOM.innerHTML = `
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv1dbnfeybgfoFAttoFa6bbyKW-8WBOWYmz5ORB08ejCs-v31Uj8tEL5wFY7F5NU4Qp0&usqp=CAU" class="resultado-img"></img>
                        <h2 class="Sobrepeso">Sobrepeso</h2>
    `
    } else {
        divDOM.innerHTML = `
                        <img src="https://portaluchile.uchile.cl//.imaging/default/dam/imagenes/Uchile/imagenes-noticias/162335_1_obesidad-4-800-l_L/jcr:content.jpg" class="resultado-img"></img>
                        <h2 class="obeso">Obeso</h2>
    `
    }
   

}
 
btnIMC.addEventListener("click", calcIMC)