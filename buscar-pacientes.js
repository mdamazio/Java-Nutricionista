var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando Pacientes");

//O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP.
//O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML,
//no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.

    var xhr = new XMLHttpRequest();

//open(), com o qual especificaremos o tipo de requisição a ser feita, no caso, GET.
//Também indicaremos para onde queremos fazê-la

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

//Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico
// que é acionado quando a requisição termina e a sua resposta é carregada.
//Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados.
//Esse evento é o load, característico do XMLHttpRequest


//Para conseguirmos transformar a resposta, que é um texto (uma string),
//em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript.
//Para realizarmos esta tarefa usaremos o método parse().
//Assim, receberemos o texto em JSON, que depois será parseado.
//Em seguida, será retornado um objeto JavaScript. Como nossa resposta se parece com um objeto, o método entenderá isso e nos retornará um array do objetos

    xhr.addEventListener("load", function(){

    var erroAjax = document.querySelector("#erro-ajax")

    if (xhr.status == 200) { //O número 200 representa o retorno OK, quando se é solicitado a carga de dados.

          erroAjax.classList.add("invisivel");//Como não deu erro, a mensagem deve ficar invisivel;

          var resposta = xhr.responseText;
          console.log(resposta);
          console.log(typeof resposta);//Retorna para o console o tipo de dado que estamos lendo.

          var pacientes = JSON.parse(resposta);
          console.log(pacientes);
          console.log(typeof pacientes);

          pacientes.forEach(function(paciente) {
              adicionaPacienteNaTabela(paciente);
          });

    } else {

            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel"); //Se der erro, a função remove a classe invisivel do span.
    }

    });

    xhr.send(); //Para que requisição seja realizada, precisaremos chamar o método send()

});
