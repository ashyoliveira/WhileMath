function gerarTabuada() {
  let numero = Number(document.getElementById("num").value);

  let tela = document.getElementById("tela-resultado");

  // Verifica se o usuário não digitou nenhum número
  if (document.getElementById("num").value === "") {
    tela.innerHTML = `
            <p class="mensagem-inicial">
                ⚠️ Digite um número para calcular a tabuada.
            </p>
        `;

    return;
  }

  // Mostra o título da tabuada
  tela.innerHTML = `
        <p class="titulo-tabuada">
            Tabuada do ${numero}
        </p>
    `;

  // Começamos o multiplicador pelo zero
  let multiplicador = 0;

  // Enquanto o multiplicador for menor ou igual a 10
  while (multiplicador <= 10) {
    // Realiza a multiplicação
    let resultado = numero * multiplicador;

    // Mostra o resultado na tela
    tela.innerHTML += `
            <p class="resultado">
                ${numero} × ${multiplicador} = ${resultado}
            </p>
        `;

    // Aumenta o multiplicador em 1
    multiplicador++;
  }
}
