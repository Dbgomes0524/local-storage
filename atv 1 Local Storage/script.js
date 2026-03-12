const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");

function salvar() {
    localStorage.setItem("Nome", JSON.stringify(nome.value));

    const dados = JSON.parse(localStorage.getItem("Nome"));
    mensagem.textContent = "bao" + dados;
}