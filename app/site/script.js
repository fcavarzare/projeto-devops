document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    const hora = new Date().toLocaleTimeString();
    mensagem.textContent = `🕒 Você clicou às ${hora}!`;
  });
});

