var pacientes = document.querySelectorAll(".paciente");


pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () {
        console.log("clicou em mim fdp. vem pra porrada carai");
        this.remove()
    })
})