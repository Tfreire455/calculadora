const numeros = document.querySelector(".numeros1-9"),
  operacao = document.querySelector(".operacoes"),
  tela = document.querySelector("#tela");

for (let i = 0; i < 10; i++) {
  numeros.innerHTML += `<button type="button" class="valoresNum" value="${i}" onclick="adicionarNumero(${i})">${i}</button>`;
  console.log(numeros);
}

function adicionarNumero(numero) {
  if (numero) {
    tela.value += numero;
  } else if (numero === 0){
    tela.value += 0;
  }
}

function adicionarOperador(operador) {

  switch (operador) {
    case "+":
      tela.value += "+";
      break;
    case "-":
      tela.value += "-";
      break;
    case "*":
      tela.value += "*";
      break;
    case "/":
      tela.value += "/";
      break;
    default:
      break;
  }
}

function calcular() {
  const resultado = eval(tela.value);
  tela.value = resultado

}

function limparTela() {
  tela.value = null
}