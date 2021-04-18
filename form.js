//Captura do acionamento do botaão ADICIONAR.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

////Extraindo informacoes do paciente do form
    var form = document.querySelector("#form-adiciona");//Trazemos o formulário do HTML e conseguimos selecioná-lo no mundo JavaScript
    var paciente = obtemPacienteDoFormulario(form);
        console.log(paciente);

//Neste momento valida se os dados de entrada : PESO e ALTURA estão válidos.

    var erros = validaPaciente(paciente);
          console.log(erros);
    if(erros.length > 0) {
      exibeMensagensDeErro(erros);
      return;
    }

    adicionaPacienteNaTabela(paciente);//Chama função para adcionar paciente na tabela.

    //Aqui o formulário é limpo, após a inserção do anterior.

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");//APAGAMOS AS MENSAGENS DE ERROS CASO O USUARIO INSIRA UM PACIENTE VÀLIDO APÒS AS MENSAGENS
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {

  //Criar um elemento HTML utilizando JavaScript.
  //Se queremos criar um paciente, vamos criar uma nova tr e as tds correspondentes.
  //Para criarmos um elemento, precisaremos informar onde queremos criar, isto é, em document

    var pacienteTr = montaTr(paciente);

    //Agora já temos algo mais próximo do que é um paciente,
    //e falta colocarmos ele dentro da tabela.
    //Para isto, vamos selecionar a tabela, o tbody do HTML através do seu id (#tabela-pacientes),
    //e utilizar a função appendChild para adicionar a tr como sua filha

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

//NESTE MOMENTO SE APAGA AS LIs QUE FORAM INSERIDAS ANTERIORMENTE, CASO O FORMULARIO ESTEJA PREENCHIDO CORRETAMENTE.
    ul.innerHTML = "";

    erros.forEach(function(erro){ //Para cada item (ERRO) do array (ERROS), faça alguma coisa (FUNCTION).
          var li = document.createElement("li");
          li.textContent = erro;
          ul.appendChild(li); //A LI criada com o erro, será anexada à lista UL.
    });
}



function obtemPacienteDoFormulario(form) {
    //Dentro das chaves, passamos as propriedades do objeto, que nada mais são que as suas características.
    //Para criar uma propriedade, passamos o seu nome e o seu valor, mas não com um igual e sim com dois pontos.
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Agora devemos adicionar cada td dentro da tr.
    //No JavaScript existe uma função chamada appendChild.
    //Ela adiciona como filho o elemento passado a ela como parâmetro.
    //Logo, vamos chamar essa função na tr, passando a td como parâmetro, uma por uma.

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

//AQUI VEMOS DUAS FORMAS DE IF QUANDO SE TEM UMA ÚNICA AÇÃO.

    if (paciente.nome.length == 0){
        erros.push("O NOME NÃO PODE ESTAR EM BRANCO!")
    }

    if(!validaPeso(paciente.peso)) erros.push("PESO INVÁLIDO");

    if(!validaAltura(paciente.altura)) erros.push("ALTURA INVÁLIDA");

    if (paciente.gordura.length == 0){
        erros.push("O ÍNDICE DE GORDURA NÃO PODE ESTAR EM BRANCO!")
    }

    if (paciente.peso.length == 0){
        erros.push("O VALOR DO PESO NÃO PODE ESTAR EM BRANCO!")
    }

    if (paciente.altura.length == 0){
        erros.push("O VALOR DA ALTURA NÃO PODE ESTAR EM BRANCO!")
    }

    return erros;
}








//Adendos da aula, conforme as explicações

        //titulo.addEventListener("click", mostraMensagem);//Aguarda o evento do clique sobre o tótulo. Se ocorrer, chama a função mostraMensagem
        //function mostraMensagem() {
        //    console.log("Olá eu fui clicado");
        //}

        //Podemos fazer o mesmo que foi feito antes, mas usando o conceito de função anônima.
        //titulo.addEventListener("click", function() {
        //    console.log("Fui clicado usando FUNCAO ANOMINA")
        //});
