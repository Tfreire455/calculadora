const entradaNumeros = document.querySelector('.input__field'),
  btnCalcular = document.querySelector('.btn-calcular'),
  btnReset = document.querySelector('.btn-reset');
const numero0 = document.querySelector('#zero');
const numero1 = document.querySelector('#um');
const numero2 = document.querySelector('#dois');
const numero3 = document.querySelector('#tres');
const numero4 = document.querySelector('#quatro');
const numero5 = document.querySelector('#cinco');
const numero6 = document.querySelector('#seis');
const numero7 = document.querySelector('#sete');
const numero8 = document.querySelector('#oito');
const numero9 = document.querySelector('#nove');
const parentesesEsquerdo = document.querySelector('#parentesesE');
const parentesesDireito = document.querySelector('#parentesesD');

const resultado = document.querySelector('.tela-resultado');
resultado.classList.add('numero-resultado')

const adicao = document.querySelector('#adicao');
const subtracao = document.querySelector('#subtracao');
const multiplicacao = document.querySelector('#multiplicacao');
const divisao = document.querySelector('#divisao');
const porcentagem = document.querySelector('#porcentagem');


numero0.addEventListener('click', () => {
  entradaNumeros.value += '0';
})

numero1.addEventListener('click', () => {
  entradaNumeros.value += '1';
})

numero2.addEventListener('click', () => {
  entradaNumeros.value += '2';
})

numero3.addEventListener('click', () => {
  entradaNumeros.value += '3';
})

numero4.addEventListener('click', () => {
  entradaNumeros.value += '4';
})

numero5.addEventListener('click', () => {
  entradaNumeros.value += '5';
})

numero6.addEventListener('click', () => {
  entradaNumeros.value += '6';
})

numero7.addEventListener('click', () => {
  entradaNumeros.value += '7';
})

numero8.addEventListener('click', () => {
  entradaNumeros.value += '8';
})

numero9.addEventListener('click', () => {
  entradaNumeros.value += '9';
})


btnCalcular.addEventListener('click', () => {
  resultado.innerHTML = `
  ${entradaNumeros.value}
`
})

function resultadoFinal() {

  const criarNumero = [];

  btnCalcular.addEventListener('click', () => {
    reset()
    if (adicao.addEventListener) {
      reset()
      criarNumero.push(parseFloat(entradaNumeros.value))
      const total = criarNumero.reduce((prev, elem) => prev + elem, 0)
      console.log(total)
      resultado.innerHTML = total
    }
  })
}

btnReset.addEventListener('click', () => {
  reset()
})

function reset() {
  entradaNumeros.value = null;
  resultado.innerHTML = null;
}

resultadoFinal()