// Esconder passo 2
voltarP1.style.display="none";
continuarP3.style.display="none";

lblCPF.style.display="none";
lblEstado.style.display="none";
lblCidade.style.display="none";
cpf.style.display="none";
estado.style.display="none";
cidade.style.display="none";

//Mensagens de erro
var msgNome = document.getElementById("validaNomeMsg"); 
var msgEmail = document.getElementById("validaEmailMsg"); 
var msgCelular = document.getElementById("validaCelularMsg");
var msgCPF = document.getElementById("validaCPFMsg");
var msgCidade = document.getElementById("validaCidadeMsg");
var msgEstado = document.getElementById("validaEstadoMsg");

//Para checar se a validade == true
var nomeValido = false;
var emailValido  = false;
var celularValido = false;
var CPFValido = false;
var estadoValido  = false;
var cidadeValida = false;

//Funções
function validaNome(){
  var inputNome = document.getElementById("nome").value;
  if(!inputNome.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/)){
    msgNome.innerText = "Preencha o nome corretamente!";
    nomeValido = false;
  }
  else{
    msgNome.innerText = "";
    nomeValido = true;
  }
}

function validaEmail(){
  var inputEmail = document.getElementById("email").value;
  if(!inputEmail.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi)){
    msgEmail.innerText = "Preencha o e-mail corretamente!";
    emailValido = false;
  }
  else{
    msgEmail.innerText = "";
    emailValido = true;
  }
}

function validaCelular(){
  var inputCelular = document.getElementById("celular").value;
  if(inputCelular.length < 15){
    msgCelular.innerText = "Preencha o número corretamente!";
    celularValido = false;
  }
  else if(inputCelular == '(00) 00000-0000' ||
  inputCelular == '(11) 11111-1111' ||
  inputCelular == '(22) 22222-2222' ||
  inputCelular == '(33) 33333-3333' ||
  inputCelular == '(44) 44444-4444' ||
  inputCelular == '(55) 55555-5555' ||
  inputCelular == '(66) 66666-6666' ||
  inputCelular == '(77) 77777-7777' ||
  inputCelular == '(88) 88888-8888' ||
  inputCelular == '(99) 99999-9999' ||
  inputCelular == '(12) 34567-8910'){
    msgCelular.innerText = "Número inválido, preencha corretamente!";
    celularValido = false;
  }
  else{
    msgCelular.innerText = "";
    celularValido = true;
  }
}

function validaCPF(cpf) {
  if (typeof cpf !== "string") return false
  cpf = cpf.replace(/[\s.-]*/igm, '')
  if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
  ) {
      CPFValido = false;
      msgCPF.innerText= "Preencha o CPF corretamente!";
      return false
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)

  resto = (soma * 10) % 11

  if ((resto == 10) || (resto == 11))  resto = 0

  if (resto != parseInt(cpf.substring(9, 10)) ) {
    CPFValido = false;
    msgCPF.innerText= "CPF inválido!";
    return false
  }
  
  soma = 0
  for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)

  resto = (soma * 10) % 11

  if ((resto == 10) || (resto == 11))  resto = 0

  if (resto != parseInt(cpf.substring(10, 11) ) ) {
    CPFValido = false;
    msgCPF.innerText= "CPF inválido!";
    return false
  }
  
  CPFValido = true;
  msgCPF.innerText= "";
  return true
}

function continuarPassoDois(){
    ShapePasso2.style.backgroundColor="#C2FF01";
    passo2.style.color="black";
    lblNome.style.display="none";
    nome.style.display="none";
    lblEmail.style.display="none";
    email.style.display="none";
    lblCelular.style.display="none";
    celular.style.display="none";
  
    continuarP2.style.display="none";
    voltarP1.style.display="block";
    continuarP3.style.display="block";
  
    lblCPF.style.display="block";
    lblEstado.style.display="block";
    lblCidade.style.display="block";
    cpf.style.display="block";
    estado.style.display="block";
    cidade.style.display="block";
}
  
function voltarPassoUm(){
    ShapePasso2.style.backgroundColor="transparent";
    passo2.style.color="white";
    lblNome.style.display="block";
    nome.style.display="block";
    lblEmail.style.display="block";
    email.style.display="block";
    lblCelular.style.display="block";
    celular.style.display="block";

    continuarP2.style.display="block";
    voltarP1.style.display="none";
    continuarP3.style.display="none";
    lblCPF.style.display="none";
    lblEstado.style.display="none";
    lblCidade.style.display="none";
    cpf.style.display="none";
    estado.style.display="none";
    cidade.style.display="none";
}

  function continuarPassoTres(){
    ShapePasso3.style.backgroundColor="#C2FF01";
    passo3.style.color="black";
    lblNome.style.display="none";
    nome.style.display="none";
    lblEmail.style.display="none";
    email.style.display="none";
    lblCelular.style.display="none";
    celular.style.display="none";

    continuarP2.style.display="none";
    voltarP1.style.display="none";
    continuarP3.style.display="none";

    lblCPF.style.display="none";
    lblEstado.style.display="none";
    lblCidade.style.display="none";
    cpf.style.display="none";
    estado.style.display="none";
    cidade.style.display="none";
}

function validaPassoUm(){
  if(nomeValido && emailValido && celularValido)
    continuarPassoDois();
  else{
  if(document.getElementById("nome").value == "")
    msgNome.innerText= "Preencha com o seu nome completo";

  if(document.getElementById("email").value == "")
    msgEmail.innerText= "Preencha com o seu email";

  if(document.getElementById("celular").value == "")
    msgCelular.innerText= "Preencha com o seu número de celular";
  } 
  
}
