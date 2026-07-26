// Simulação simples do fluxo de verificação de um documento digital.
// Objetivo: demonstrar, para fins de trabalho acadêmico, como uma página
// de validação poderia checar um "código de uso" e uma data, sem se
// conectar a nenhum serviço real.

const statusBox = document.getElementById('statusBox');
const statusLabel = document.getElementById('statusLabel');

// Dados fictícios que fazem o papel de "base de dados" local do demo.
const baseFicticia = {
  "AAAA0000": {
    nome: "Fulano de Tal Exemplo",
    cpf: "000.000.000-00",
    nascimento: "01/01/2000",
    curso: "Engenharia de Software",
    instituicao: "Universidade Exemplo",
    emissor: "Instituição Demo",
    valido: true
  }
};

function simularVerificacao(codigo) {
  statusLabel.textContent = "VERIFICANDO...";
  statusBox.style.borderColor = "#c9c9c9";
  statusBox.style.background = "#f1f1f1";
  statusBox.style.color = "#555";

  setTimeout(() => {
    const registro = baseFicticia[codigo];

    if (registro && registro.valido) {
      statusLabel.textContent = "DOCUMENTO VÁLIDO";
      statusBox.style.borderColor = "#1f9d55";
      statusBox.style.background = "#e7f8ec";
      statusBox.style.color = "#1f9d55";
    } else {
      statusLabel.textContent = "DOCUMENTO INVÁLIDO";
      statusBox.style.borderColor = "#c53030";
      statusBox.style.background = "#fdeaea";
      statusBox.style.color = "#c53030";
    }
  }, 900);
}

// Dispara a simulação assim que a página carrega, usando o código fictício padrão.
document.addEventListener('DOMContentLoaded', () => {
  simularVerificacao("AAAA0000");
});

// Botão de menu (apenas efeito visual, sem conteúdo real de navegação neste demo).
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});
