document;
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    const headerHeight = document.querySelector("header").offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight, // Ajuste para evitar sobreposição
      behavior: "smooth",
    });
  });
});
let lastScrollTop = 0;
const header = document.querySelector("header");

window
  .addEventListener("scroll", function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Rolando para baixo → esconder o header
      header.style.top = "-80px";
    } else {
      // Rolando para cima → mostrar o header
      header.style.top = "0";
    }

    lastScrollTop = currentScroll;
  })
  .getElementById("formContato")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Mensagem enviada com sucesso!");

    document.getElementById("formContato").reset();

    document.getElementById("year").textContent = new Date().getFullYear();
  });
