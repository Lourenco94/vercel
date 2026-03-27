function abrirAba(id) {
    const abas = document.querySelectorAll(".conteudo");
    const botoes = document.querySelectorAll(".tab");

    abas.forEach(aba => aba.classList.remove("active"));
    botoes.forEach(btn => btn.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    event.target.classList.add("active");
}