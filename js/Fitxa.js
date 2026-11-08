const contenidorCompte = document.querySelector("#compte-fitxa");
contenidorCompte.appendChild(creaCompteEnrere());

const visor = document.querySelector("#visor");
const visorImatge = document.querySelector("#visor-imatge");

// Mostra la imatge clicada en gran: copia la seva adreça i el seu text alternatiu al visor i el fa visible
function obreVisor(imatge) {
    visorImatge.src = imatge.src;
    visorImatge.alt = imatge.alt;
    visor.classList.remove("ocult");
}

// Amaga el visor afegint la classe ocult
function tancaVisor() {
    visor.classList.add("ocult");
}

document.querySelectorAll(".captura").forEach((captura) => {
    captura.addEventListener("click", () => {
        obreVisor(captura);
    });

    captura.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            obreVisor(captura);
        }
    });
});

visor.addEventListener("click", tancaVisor);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        tancaVisor();
    }
});