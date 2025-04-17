// Função para revelar elementos ao rolar
function revelarAoScroll() {
    const elementos = document.querySelectorAll("section");

    for (let el of elementos) {
        const topoElemento = el.getBoundingClientRect().top;
        const alturaJanela = window.innerHeight;

        if (topoElemento < alturaJanela - 100) {
            el.classList.add("ativo");
        } else {
            el.classList.remove("ativo");
        }
    }
}

window.addEventListener("scroll", revelarAoScroll);
revelarAoScroll(); // executa uma vez pra mostrar o que já estiver visível
// Adiciona isso no script.js
const texto = "Técnico em Marketing";
let i = 0;

function digitar() {
    if (i < texto.length) {
        document.getElementById("typing").innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 100); // velocidade
    }
}
digitar();
function alternarTema() {
    document.body.classList.toggle("dark-mode");
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


