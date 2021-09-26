const titulo = document.querySelector("#titulo");
// console.log(titulo)
// console.log(titulo.textContent)
// para alterar o conteúdo de texto e usado o textContent
titulo.textContent = "Aparecida Nutricionista";

// pegando dados do html 
var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAlto = paciente.querySelector(".info-altura")
    var altura = tdAlto.textContent


    var tdIMC = paciente.querySelector(".info-imc")


    // conferindo se os dados são verdadeiros
    var pesoEhValido = true;
    var alturaEhValido = true;


    if (peso <= 0 || peso >= 1000) {
        console.log("peso inválido!")
        pesoEhValido = false
        tdIMC.textContent = "peso inválido!"

        // para pegar estilo do css 
        paciente.classList.add("paciente-invalido")

        // alterando o estilo da página com js
        // paciente.style.backgroundColor = "#FF8A87"

    }
    if (altura <= 0 || altura > 3) {
        console.log("altura inválida!")
        alturaEhValido = false;
        tdIMC.textContent = "altura inválida!"
        paciente.classList.add("paciente-invalido")

        // paciente.style.backgroundColor = "lightcoral"
    }




    // mostrando na tela os dados

    if (pesoEhValido && alturaEhValido) {
        var imc = calculaImc(peso,altura)

        tdIMC.textContent = imc

        // toFixed para travar as casas decimais
    }
}


function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura);

    return imc.toFixed(2) 
}






// função anonima




// função nomeada 
// titulo.addEventListener("click", monstraMensagem);

// function monstraMensagem() {
//     console.log("ainnn bom dia gostosa")
// }
