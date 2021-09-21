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
        var imc = peso / (altura * altura);

        tdIMC.textContent = imc.toFixed(2)

        // toFixed para travar as casas decimais
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    // evitar que a página recarregue , prevenir o comportamento padrão 
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value


    // add html pelo js
    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)


    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
})








// função anonima

titulo.addEventListener("click", function () {
    console.log("click no anónimo ")
});


// função nomeada 
// titulo.addEventListener("click", monstraMensagem);

// function monstraMensagem() {
//     console.log("ainnn bom dia gostosa")
// }
