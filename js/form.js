var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    // evitar que a página recarregue , prevenir o comportamento padrão 
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    // extraindo informações do form
    var paciente = obtemPacienteDoForm(form)
    // cria a tr a td do paciente
    var pacienteTr = montaTr(paciente)

    var erro = validaPaciente(paciente)
    console.log(erros)

    if (erro.length > 0) { 
        exibeMensagemDeErro(erros)
        return 
    } 

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

  

    // limpar campos
    form.reset()
    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML= ""
})

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro")

    ul.innerHTML = ""


    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    // var nome = form.nome.value
    // var peso = form.peso.value
    // var altura = form.altura.value
    // var gordura = form.gordura.value

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;  
}

function validaPaciente(paciente) {

    erros = []
    if(paciente.nome.length == 0 ) erros.push("Adicione um nome para o Paciente!")

    if (!validaPeso(paciente.peso)) erros.push("Peso inválido")
    if (paciente.peso == 0) erros.push("Adicione o Peso!")
    
    if (!validaAltura(paciente.altura)) erros.push("Altura inválida")
    if (paciente.altura.length == 0) erros.push("Adicione a Altura!")
   
    if (paciente.gordura.length == 0) erros.push("Adicione a gordura!")
    
    return erros

    
}