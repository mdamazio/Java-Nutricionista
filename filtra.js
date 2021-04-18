var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //O evento input representa a digitação no campo.

      console.log(this.value);//Mostra no console exatamente o que foi digitado

//Conforme o usuário vai digitando se faz necessário fazer
//comparações com os nomes da tabela

      var pacientes = document.querySelectorAll(".paciente"); //Neste momento se retorno todos os nomes da classe .pacientes

      if( this.value.length > 0){

          for (var i = 0; i < pacientes.length; i++) {
              var paciente = pacientes[i];
              var tdNome = paciente.querySelector(".info-nome");
              var nome = tdNome.textContent;

              //É bastante simples criar expressões regulares. Criaremos uma variável, que no caso chamaremos expressao,
              //e em seguida colocaremos uma expressão regular dentro dela.
              //Vamos gerar um objeto especial do JS, adicionando new e o nome RegExp()
              //A primeira parte da RegExp representa o que se quer buscar
              //A segunda é Case Sensitive ou Case Insensitive

              var expressao = new RegExp(this.value,"i");

              if (!expressao.test(nome)) { //Aqui foi alterado por causa da expressao regular (antes nome != this.value)
                  //! usado para negar 
                  paciente.classList.add("invisivel");
              } else {
                  paciente.classList.remove("invisivel");
              }
          }

        } else {
          for (var i = 0; i < pacientes.length; i++) {
              var paciente = pacientes[i];
              paciente.classList.remove("invisivel");
          }
        }


})
