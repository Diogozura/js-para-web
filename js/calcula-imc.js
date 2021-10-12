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
    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);


    if (!pesoEhValido) {
        pesoEhValido = false
        tdIMC.textContent = "peso inválido!"

        // para pegar estilo do css 
        paciente.classList.add("paciente-invalido")

        // alterando o estilo da página com js
        // paciente.style.backgroundColor = "#FF8A87"

    }
    if (!alturaEhValido) {
        console.log("altura inválida!")
        alturaEhValido = false;
        tdIMC.textContent = "altura inválida!"
        paciente.classList.add("paciente-invalido")

        // paciente.style.backgroundColor = "lightcoral"
    }


    // mostrando na tela os dados

    if (pesoEhValido && alturaEhValido) {
        var imc = calculaImc(peso, altura)

        tdIMC.textContent = imc

        // toFixed para travar as casas decimais
    }


    function validaPeso(peso) {
        if (peso >= 0 && peso < 1000) {
            return true
        } else {
            return false
        }
    }

    function validaAltura(altura) {
        if (altura >=0 && altura <= 3.0) {
            return true
        } else {
            return false
        }
    }
  
    function calculaImc(peso, altura) {
         var imc = 0
         imc = peso / (altura * altura);

        return imc.toFixed(2)
        }
    
}