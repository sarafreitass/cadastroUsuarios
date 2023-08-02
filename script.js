var usuario_x;
var usuario_o;
//para acessar o valor dessas variaveis uso var.value
var mudar = document.getElementsByClassName("box_jogo")[0];
var vez;
var contador = 0;
var change = document.getElementsByClassName("BotaoRecomecar")[0];

function Recomecar(){
    document.location.reload(true);
}
function Começar(){
  usuario_x=document.getElementsByClassName("Input")[0].value;
  usuario_o=document.getElementsByClassName("Input")[1].value;
  mudar.style.visibility = "visible"
  vez = "X"
  document.getElementById("mensa").innerText=usuario_x + " sua vez!"
}

function Escrever(numero_id){

  var conteudo = document.getElementById(numero_id);
  conteudo.textContent = vez;

    if (vez == "X") {
      vez = "O"
      document.getElementById("mensa").innerText=usuario_o + " sua vez!"
    }
    else{
      vez = "X"
      document.getElementById("mensa").innerText=usuario_x + " sua vez!"
    }
  Verificar();
  contador ++;

    if (contador == 9 && Verificar() == 0) {
      document.getElementById("mensa").innerText="Deu velha! ):"
      change.style.visibility = "visible";
      
  }
}

function Verificar(){

  var a11 = document.getElementById("11").innerText;
  var a12 = document.getElementById("12").innerText;
  var a13 = document.getElementById("13").innerText;
  var a21 = document.getElementById("21").textContent;
  var a22 = document.getElementById("22").textContent;
  var a23 = document.getElementById("23").textContent;
  var a31 = document.getElementById("31").textContent;
  var a32 = document.getElementById("32").textContent;
  var a33 = document.getElementById("33").textContent;
  
  if ((a11 == "X" && a22 == "X" && a33 == "X") ||
      (a11 == "X" && a12 == "X" && a13 == "X") ||
      (a21 == "X" && a22 == "X" && a23 == "X") || 
      (a31 == "X" && a32 == "X" && a33 == "X") || 
      (a13 == "X" && a22 == "X" && a31 == "X") ||
      
      (a11 == "X" && a21 == "X" && a31 == "X") ||
      (a12 == "X" && a22 == "X" && a32 == "X") ||
      (a13 == "X" && a23 == "X" && a33 == "X") ) {
    
      document.getElementById("mensa").innerText=usuario_x + " venceu!"
      change.style.visibility = "visible";
    
      }

  if ((a11 == "O" && a22 == "O" && a33 == "O") ||
      (a11 == "O" && a12 == "O" && a13 == "O") || 
      (a21 == "O" && a22 == "O" && a23 == "O") ||
      (a31 == "O" && a32 == "O" && a33 == "O") ||
      (a13 == "O" && a22 == "O" && a31 == "O") ||

      (a11 == "O" && a21 == "O" && a31 == "O") ||
      (a12 == "O" && a22 == "O" && a32 == "O") ||
      (a13 == "O" && a23 == "O" && a33 == "O") ) {
    
      document.getElementById("mensa").innerText=usuario_o + " venceu!"
      change.style.visibility = "visible";
    
      }
    
  else { return 0; }
}