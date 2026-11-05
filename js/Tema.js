const botoTema = document.querySelector("#tema-toggle");

function canviaTema() {
    
    const modeClar = document.body.classList.toggle("light-mode");

    if (modeClar) {
        botoTema.textContent = "⏾"; 
    } else {
        botoTema.textContent = "☀︎"; 
    }
}
botoTema.addEventListener("click", canviaTema);