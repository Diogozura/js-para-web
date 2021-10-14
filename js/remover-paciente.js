var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode
    // paiDoAlvo.remove()

    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function () {
        event.target.parentNode.remove()
    },5 00)  

})


// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         console.log("clicou em mim fdp. vem pra porrada carai");
//         this.remove()
//     })
// })