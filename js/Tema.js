const CLAU_TEMA = "tema-dogstar";
const botoTema = document.querySelector("#tema-toggle");

// Llegeix el mode guardat: retorna "clar", "fosc" o null si no hi ha res guardat
function llegeixTemaGuardat() {
    try {
        return localStorage.getItem(CLAU_TEMA);
    } catch (error) {
        return null;
    }
}

// Guarda el mode triat perquè les altres pàgines l'apliquin en obrir-se
function guardaTema(modeClar) {
    try {
        localStorage.setItem(CLAU_TEMA, modeClar ? "clar" : "fosc");
    } catch (error) {
    }
}

// Canvia la icona del botó segons el mode (lluna al mode clar, sol al mode fosc)
function actualitzaIcona(modeClar) {
    botoTema.textContent = modeClar ? "🌙" : "☀️";
}

// Decideix el mode inicial: primer el guardat, si no el del sistema operatiu
function triaModeInicial() {
    const guardat = llegeixTemaGuardat();
    if (guardat === "clar") {
        return true;
    }
    if (guardat === "fosc") {
        return false;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches;
}

// Alterna la classe light-mode al body, canvia la icona i guarda el mode
function canviaTema() {
    const modeClar = document.body.classList.toggle("light-mode");
    actualitzaIcona(modeClar);
    guardaTema(modeClar);
}

const modeInicialClar = triaModeInicial();
document.body.classList.toggle("light-mode", modeInicialClar);
actualitzaIcona(modeInicialClar);

botoTema.addEventListener("click", canviaTema);