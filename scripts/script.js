let botaosuperior = document.querySelector(".botaosuperior");

botaosuperior.addEventListener("mouseenter", () => {
    botaosuperior.style.animation = "mascara 1s steps(22) forwards"
})

botaosuperior.addEventListener("mouseleave", () => {
    botaosuperior.style.animation = "mascarainverse 1s steps(22) forwards"
})