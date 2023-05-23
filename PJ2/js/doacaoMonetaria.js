function formatarNumero(input) {
  // Remove todos os caracteres não numéricos
  let numero = input.value.replace(/\D/g, '');
  
  // Adiciona espaços a cada 3 dígitos a partir do começo
  numero = numero.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
  
  input.value = numero;
}

function formatarData(input) {
  // Remove todos os caracteres não numéricos
  let numero = input.value.replace(/\D/g, '');
    
  // Adiciona espaços a cada 2 dígitos a partir do começo
  numero = numero.replace(/\B(?=(\d{2})+(?!\d))/g, '/');
    
  input.value = numero;
}

function formatarLetra(input) {
  // Remove todos os caracteres que não seja letra
  let letra = input.value.replace(/\d/g, '');

  input.value = letra;
}

function formatarNumeroUnico(input) {
  let numeroUnico = input.value.replace(/\D/g, '');

  input.value = numeroUnico;
}


function formatarDinheiro() {
  var input = document.getElementById('inputMonetario');
  var valor = parseFloat(input.value.replace(',', '.'));
  var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  input.value = valorFormatado;
}
