function formatarData(input) {
    // Remove todos os caracteres não numéricos
    let numero = input.value.replace(/\D/g, '');
      
    // Adiciona espaços a cada 2 dígitos a partir do começo
    numero = numero.replace(/\B(?=(\d{8})+(?!\d))/g, '/');
      
    input.value = numero;
  }