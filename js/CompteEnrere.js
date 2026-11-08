const DATA_LLANCAMENT = new Date(2026, 10, 19);
const TEXT_LLANCAMENT = "19 de novembre de 2026";

const MS_SEGON = 1000;
const MS_MINUT = 60 * MS_SEGON;
const MS_HORA = 60 * MS_MINUT;
const MS_DIA = 24 * MS_HORA;

// Retorna els dies, hores, minuts i segons que falten, o null si el llançament ja ha passat
function calculaTempsRestant() {
    const diferencia = DATA_LLANCAMENT.getTime() - Date.now();
    if (diferencia <= 0) {
        return null;
    }
    return {
        dies: Math.floor(diferencia / MS_DIA),
        hores: Math.floor((diferencia % MS_DIA) / MS_HORA),
        minuts: Math.floor((diferencia % MS_HORA) / MS_MINUT),
        segons: Math.floor((diferencia % MS_MINUT) / MS_SEGON)
    };
}

// Posa dos dígits a un número (5 passa a "05")
function dosDigits(numero) {
    return String(numero).padStart(2, "0");
}

// Escriu els valors actuals dins d'un bloc de compte enrere (o "Ja disponible!" si ja ha arribat)
function actualitzaCompteEnrere(bloc) {
    const temps = calculaTempsRestant();
    if (temps === null) {
        bloc.textContent = "Ja disponible!";
        return;
    }
    bloc.querySelector(".compte-dies").textContent = temps.dies;
    bloc.querySelector(".compte-hores").textContent = dosDigits(temps.hores);
    bloc.querySelector(".compte-minuts").textContent = dosDigits(temps.minuts);
    bloc.querySelector(".compte-segons").textContent = dosDigits(temps.segons);
}

// Crea amb el DOM un bloc de compte enrere (quatre caselles) i el retorna ja omplert
function creaCompteEnrere() {
    const bloc = document.createElement("div");
    bloc.classList.add("compte-enrere");

    const unitats = ["dies", "hores", "minuts", "segons"];
    unitats.forEach((unitat) => {
        const caixa = document.createElement("div");
        caixa.classList.add("compte-caixa");

        const valor = document.createElement("span");
        valor.classList.add("compte-valor", "compte-" + unitat);

        const etiqueta = document.createElement("span");
        etiqueta.classList.add("compte-etiqueta");
        etiqueta.textContent = unitat;

        caixa.appendChild(valor);
        caixa.appendChild(etiqueta);
        bloc.appendChild(caixa);
    });

    actualitzaCompteEnrere(bloc);
    return bloc;
}

setInterval(() => {
    document.querySelectorAll(".compte-enrere").forEach(actualitzaCompteEnrere);
}, MS_SEGON);