const formulari = document.querySelector("#formulari-reserva");
const campNom = document.querySelector("#nom");
const campEmail = document.querySelector("#email");
const campTelefon = document.querySelector("#telefon");
const campJoc = document.querySelector("#joc");
const campQuantitat = document.querySelector("#quantitat");
const campMetode = document.querySelector("#metode");
const campComentaris = document.querySelector("#comentaris");
const campCondicions = document.querySelector("#condicions");
const comptador = document.querySelector("#comptador-comentaris");
const resum = document.querySelector("#resum");

const MIN_NOM = 3;
const MIN_COMENTARIS = 20;
const MAX_COMENTARIS = 300;
// Rang de la quantitat: de 1 a 10 unitats per reserva. És un rang raonable per a una
// botiga (ningú reserva 0 jocs ni centenars) i coincideix amb el màxim que ja tenia l'HTML.
const QUANTITAT_MIN = 1;
const QUANTITAT_MAX = 10;

// Elimina el missatge d'error d'un camp (si en té) i treu la marca d'error
function eliminaError(camp) {
    const error = document.querySelector("#error-" + camp.id);
    if (error !== null) {
        error.remove();
    }
    camp.classList.remove("camp-error");
}

// Mostra un missatge d'error sota el camp i el marca amb la classe camp-error
function mostraError(camp, missatge) {
    eliminaError(camp);

    const error = document.createElement("p");
    error.classList.add("missatge-error");
    error.id = "error-" + camp.id;
    error.textContent = missatge;

    const lloc = camp.type === "checkbox" ? camp.parentElement : camp;
    lloc.after(error);

    camp.classList.add("camp-error");
}

// Si el camp és vàlid treu el seu error, si no el mostra; retorna true o false
function comprovaCamp(camp, esValid, missatge) {
    if (esValid) {
        eliminaError(camp);
        return true;
    }
    mostraError(camp, missatge);
    return false;
}

// Nom: obligatori, mínim 3 caràcters un cop eliminats els espais dels extrems
function validaNom() {
    const valor = campNom.value.trim();
    return comprovaCamp(campNom, valor.length >= MIN_NOM, "El nom ha de tenir com a mínim 3 caràcters.");
}

// Correu: obligatori i amb @ i un punt darrere de la @
function validaEmail() {
    const valor = campEmail.value.trim();
    if (valor === "") {
        mostraError(campEmail, "El correu electrònic és obligatori.");
        return false;
    }
    const posicioArroba = valor.indexOf("@");
    const posicioPunt = valor.lastIndexOf(".");

    const formatCorrecte = posicioArroba >= 1 && posicioPunt > posicioArroba + 1 && posicioPunt < valor.length - 1;
    return comprovaCamp(campEmail, formatCorrecte, "El correu no té un format vàlid (exemple: nom@domini.com).");
}

// Telèfon: opcional, però si s'omple ha de tenir 9 xifres (revisió bàsica, s'ignoren els espais)
function validaTelefon() {
    const valor = campTelefon.value.trim();
    if (valor === "") {
        eliminaError(campTelefon);
        return true;
    }
    const xifres = valor.split(" ").join("");
    const correcte = xifres.length === 9 && !isNaN(Number(xifres));
    return comprovaCamp(campTelefon, correcte, "El telèfon ha de tenir 9 xifres.");
}

// Joc: s'ha de triar una opció que no sigui la de per defecte (value buit)
function validaJoc() {
    return comprovaCamp(campJoc, campJoc.value !== "", "Tria el joc que vols reservar.");
}

// Quantitat: número enter dins del rang QUANTITAT_MIN - QUANTITAT_MAX
function validaQuantitat() {
    const text = campQuantitat.value.trim();
    const quantitat = Number(text);

    const correcte = text !== "" && !isNaN(quantitat) && Number.isInteger(quantitat)
        && quantitat >= QUANTITAT_MIN && quantitat <= QUANTITAT_MAX;
    return comprovaCamp(campQuantitat, correcte, "La quantitat ha de ser un número enter entre 1 i 10.");
}

// Mètode de pagament: s'ha de triar una opció que no sigui la de per defecte
function validaMetode() {
    return comprovaCamp(campMetode, campMetode.value !== "", "Tria un mètode de pagament.");
}

// Comentaris: entre 20 i 300 caràcters (comptant sense els espais dels extrems)
function validaComentaris() {
    const longitud = campComentaris.value.trim().length;
    const correcte = longitud >= MIN_COMENTARIS && longitud <= MAX_COMENTARIS;
    return comprovaCamp(campComentaris, correcte, "Els comentaris han de tenir entre 20 i 300 caràcters.");
}

// Condicions: la casella ha d'estar marcada
function validaCondicions() {
    return comprovaCamp(campCondicions, campCondicions.checked, "Has d'acceptar les condicions de reserva.");
}

// Mostra sota el textarea quants caràcters porta escrits
function actualitzaComptador() {
    comptador.textContent = `${campComentaris.value.length} / ${MAX_COMENTARIS} caràcters`;
}

// Crea un paràgraf amb una etiqueta en negreta i el valor al costat
function creaLiniaResum(etiqueta, valor) {
    const paragraf = document.createElement("p");
    const negreta = document.createElement("strong");
    negreta.textContent = etiqueta;
    paragraf.appendChild(negreta);
    paragraf.appendChild(document.createTextNode(" " + valor));
    return paragraf;
}

// Construeix amb el DOM la targeta de resum, substitueix l'anterior i buida el formulari
function mostraResum() {
    const nom = campNom.value.trim();
    const email = campEmail.value.trim();
    const telefon = campTelefon.value.trim() === "" ? "No indicat" : campTelefon.value.trim();
    const joc = campJoc.value;
    const quantitat = campQuantitat.value;
    const metode = campMetode.options[campMetode.selectedIndex].textContent;
    const comentaris = campComentaris.value.trim();

    resum.textContent = "";

    const targeta = document.createElement("article");

    const agraiment = document.createElement("h3");
    agraiment.textContent = `Gràcies, ${nom}! Hem rebut la teva reserva.`;
    targeta.appendChild(agraiment);

    targeta.appendChild(creaLiniaResum("Nom:", nom));
    targeta.appendChild(creaLiniaResum("Correu:", email));
    targeta.appendChild(creaLiniaResum("Telèfon:", telefon));
    targeta.appendChild(creaLiniaResum("Joc:", joc));
    targeta.appendChild(creaLiniaResum("Quantitat:", quantitat));
    targeta.appendChild(creaLiniaResum("Mètode de pagament:", metode));
    targeta.appendChild(creaLiniaResum("Comentaris:", comentaris));

    resum.appendChild(targeta);

    formulari.reset();
    actualitzaComptador();
}

// Si arribem des d'un botó "Reservar", el joc ve a l'adreça (?joc=GTA VI) i el deixem triat al select
function preseleccionaJocDeLAdreca() {
    const parametres = new URLSearchParams(window.location.search);
    const joc = parametres.get("joc");
    if (joc === null) {
        return;
    }
    campJoc.value = joc;

    if (campJoc.value !== joc) {
        campJoc.selectedIndex = 0;
    }
}

formulari.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomOk = validaNom();
    const emailOk = validaEmail();
    const telefonOk = validaTelefon();
    const jocOk = validaJoc();
    const quantitatOk = validaQuantitat();
    const metodeOk = validaMetode();
    const comentarisOk = validaComentaris();
    const condicionsOk = validaCondicions();

    if (nomOk && emailOk && telefonOk && jocOk && quantitatOk && metodeOk && comentarisOk && condicionsOk) {
        mostraResum();
    } else {
        formulari.querySelector(".camp-error").focus();
    }
});

// Quan l'usuari modifica un camp que té error, el torna a validar (així l'error desapareix en corregir-lo)
function revalidaSiTeError(camp, validacio) {
    camp.addEventListener("input", () => {
        if (camp.classList.contains("camp-error")) {
            validacio();
        }
    });
}

revalidaSiTeError(campNom, validaNom);
revalidaSiTeError(campEmail, validaEmail);
revalidaSiTeError(campTelefon, validaTelefon);
revalidaSiTeError(campJoc, validaJoc);
revalidaSiTeError(campQuantitat, validaQuantitat);
revalidaSiTeError(campMetode, validaMetode);
revalidaSiTeError(campComentaris, validaComentaris);
revalidaSiTeError(campCondicions, validaCondicions);

campComentaris.addEventListener("input", actualitzaComptador);
actualitzaComptador();

preseleccionaJocDeLAdreca();