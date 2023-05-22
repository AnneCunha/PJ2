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
    
    // Adiciona espaços a cada 3 dígitos a partir do começo
    numero = numero.replace(/\B(?=(\d{2})+(?!\d))/g, '/');
    
    input.value = numero;
  }