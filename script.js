
// Vinicius Marcelo Alencar Moraes:
// Média mínima para aprovação alterada para 7.

// Wemerson Gustavo:
// Três mensagens de resultado utilizando if, else if e else.

const botao = document.getElementById("btn-calcular");

botao.addEventListener("click", function () {

    const nome = document.getElementById("nome").value.trim();
    const resultado = document.getElementById("resultado");

    // Matheus Ribeiro Magalhães:
    // inclusão da Nota 4 no sistema.
    const campos = ["nota1", "nota2", "nota3", "nota4"].map(
        id => document.getElementById(id).value
    );

    // Verifica se todos os campos foram preenchidos
    if (!nome || campos.some(valor => valor.trim() === "")) {
        resultado.textContent = "Preencha todos os campos.";
        return;
    }

    const notas = campos.map(Number);

    // Verifica se todas as notas estão entre 0 e 10
    if (notas.some(nota =>
        !Number.isFinite(nota) || nota < 0 || nota > 10
    )) {
        resultado.textContent = "Digite notas entre 0 e 10.";
        return;
    }

    // Matheus Ribeiro Magalhães:
    // cálculo da média com as quatro avaliações.
    const media = (
        notas[0] + notas[1] + notas[2] + notas[3]
    ) / 4;

    let situacao;

    // Wemerson Gustavo:
    // inclusão de três opções de resultado.
    if (media > 7) {
        situacao = "Parabéns, você passou!";

    } else if (Math.abs(media - 7) < 1e-9) {
        situacao = "Você passou na média. Parabéns!";

    } else {
        situacao = "Infelizmente, você não alcançou a média.";
    }

    // Exibição do resultado
    resultado.textContent =
        `${nome} - Média: ${media.toFixed(1)} - ${situacao}`;

});