document.addEventListener("DOMContentLoaded", function () {
  // Adicionando funcionalidade ao envio de formulário (se existir)
  const formContato = document.getElementById("formContato");

  if (formContato) {
    formContato.addEventListener("submit", function (event) {
      event.preventDefault();

      let nome = document.getElementById("nome").value;
      let email = document.getElementById("email").value;
      let mensagem = document.getElementById("mensagem").value;

      if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      alert("Mensagem enviada com sucesso!");
      formContato.reset();
      document.getElementById("year").textContent = new Date().getFullYear();
    });
  }

  // Alterando o texto de um elemento clicado (se existir)
  const textBox = document.getElementById("textBox");
  if (textBox) {
    textBox.addEventListener("click", function () {
      this.innerText = "Você clicou!";
    });
  }
});
