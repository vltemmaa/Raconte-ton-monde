// Animation des bulles (effet d’apparition)
const bulles = document.querySelectorAll(".temo-bulle, .destination-bloc, .conseil-bulle");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

bulles.forEach(bulle => {
    bulle.style.opacity = 0;
    bulle.style.transform = "translateY(30px)";
    bulle.style.transition = "0.6s";
    observer.observe(bulle);
});

// Bouton retour en haut
const btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.id = "btnTop";
btnTop.style.position = "fixed";
btnTop.style.bottom = "25px";
btnTop.style.right = "25px";
btnTop.style.padding = "10px 13px";
btnTop.style.borderRadius = "50%";
btnTop.style.background = "#ff7b00";
btnTop.style.color = "white";
btnTop.style.border = "none";
btnTop.style.fontSize = "20px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "50";
document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

