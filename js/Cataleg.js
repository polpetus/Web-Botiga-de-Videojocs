const jocs = [
    {
        titol: "GTA 1",
        genere: "Acció / Món Obert",
        plataforma: "PC / PS1",
        preu: 69.99,
        valoracio: 8,
        estoc: 12,
        imatge: "../img/GTA.jpg",
        descripcio: "El joc que ho va començar tot. Experimenta el primer capítol de l'acció criminal en un món obert, on tu tries on anar i a qui robar.",
        favorit: false,
        popular: false,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA 2",
        genere: "Acció / Món Obert",
        plataforma: "PC / PS1",
        preu: 49.99,
        valoracio: 8.2,
        estoc: 3,
        imatge: "../img/GTA 2.jpg",
        descripcio: "El respecte ho és tot. A Anywhere City, el crim està dividit en diverses bandes. Treballa per a elles, guanya el seu respecte i destrueix els teus enemics.",
        favorit: false,
        popular: false,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA III",
        genere: "Acció / Món Obert",
        plataforma: "PS2 / PC",
        preu: 33.99,
        valoracio: 9.3,
        estoc: 20,
        imatge: "../img/GTA III.jpg",
        descripcio: "El crim sí que compensa. La saga de gran èxit i alta controvèrsia fa el salt a les 3 dimensions en el fosc i sòrdid submón de Liberty City. Amb la llibertat d'anar a qualsevol lloc i atracar a qualsevol persona.",
        favorit: false,
        popular: false,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA Vice City",
        genere: "Acció / Món Obert",
        plataforma: "PS2 / PC",
        preu: 99.99,
        valoracio: 9.5,
        estoc: 0,
        imatge: "../img/GTA Vice City.jpg",
        descripcio: "Benvingut als anys vuitanta. De la dècada de les grans cabelleres, l'excés i els vestits de tons pastís, arriba la història de l'ascens d'un home al cim de l'imperi criminal.",
        favorit: false,
        popular: true,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA San Andreas",
        genere: "Acció / Món Obert",
        plataforma: "PS2 / PC",
        preu: 129.99,
        valoracio: 10,
        estoc: 8,
        imatge: "../img/GTA San Andreas.jpg",
        descripcio: "Fa cinc anys, en Carl Johnson va escapar de les pressions de Los Santos, San Andreas, una ciutat destrossada per les bandes, les drogues i la corrupció. Ara, a principis dels noranta, en CJ ha de tornar a casa.",
        favorit: false,
        popular: true,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA Advance",
        genere: "Acció / Món Obert",
        plataforma: "Game Boy Advance",
        preu: 4,
        valoracio: 7,
        estoc: 15,
        imatge: "../img/GTA Advance.jpg",
        descripcio: "Torna als carrers de Liberty City des d'una nova perspectiva. Centenars d'hores de joc amb tota l'acció clàssica de GTA dissenyada per a la consola portàtil.",
        favorit: false,
        popular: false,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA IV",
        genere: "Acció / Món Obert",
        plataforma: "PS3 / Xbox 360 / PC",
        preu: 599.99,
        valoracio: 10,
        estoc: 4,
        imatge: "../img/GTA IV.jpg",
        descripcio: "Què significa avui dia el somni americà? Per a en Niko Bellic, acabat d'arribar d'Europa en vaixell, és l'esperança de poder escapar del seu passat. Per al seu cosí, en Roman, és la visió que junts poden fer fortuna a Liberty City.",
        favorit: false,
        popular: true,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA Chinatown Wars",
        genere: "Acció / Món Obert",
        plataforma: "Nintendo DS / PSP",
        preu: 1.99,
        valoracio: 9,
        estoc: 6,
        imatge: "../img/GTA Chinatown Wars.jpg",
        descripcio: "Després de l'assassinat del seu pare, en Huang Lee té una missió molt senzilla: portar una espasa antiga al seu oncle Kenny per assegurar-se que la seva família conservi el control de les tríades de Liberty City.",
        favorit: false,
        popular: false,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA V",
        genere: "Acció / Món Obert",
        plataforma: "PS4 / Xbox One / PC",
        preu: 1999.99,
        valoracio: 9.7,
        estoc: 50,
        imatge: "../img/GTA V.jpg",
        descripcio: "Quan un jove estafador del carrer, un atracador de bancs retirat i un psicòpata aterridor es veuen involucrats amb el pitjor de l'inframon criminal, el govern dels EUA i la indústria de l'espectacle, hauran de dur a terme una sèrie de perillosos cops per sobreviure.",
        favorit: false,
        popular: false,
        proximament: false,
        destacat: false
    },
    {
        titol: "GTA VI",
        genere: "Acció / Món Obert",
        plataforma: "PS5 / Xbox Series X",
        preu: 999999.99,
        valoracio: null,
        estoc: 25,
        imatge: "../img/GTA VI.jpg",
        descripcio: "Grand Theft Auto VI viatja a l'estat de Leonida, on es troben els carrers banyats per neons de Vice City i els seus voltants, en l'evolució més gran i immersiva de la saga Grand Theft Auto fins ara.",
        favorit: false,
        popular: true,
        proximament: true,
        destacat: true
    }
];

const TIPUS_IVA = 21;

// Retorna el preu amb IVA a partir del preu sense IVA
function calculaPreuAmbIva(preu) {
    return preu * (1 + TIPUS_IVA / 100);
}

// Crea un element amb una etiqueta, una classe opcional i un text opcional, i el retorna
function creaElement(etiqueta, classe, text = "") {
    const element = document.createElement(etiqueta);
    if (classe) {
        element.classList.add(classe);
    }
    element.textContent = text;
    return element;
}

// Crea un paràgraf amb una etiqueta en negreta (p. ex. "Preu:") i el valor al costat
function creaParagrafAmbEtiqueta(classe, etiqueta, valor) {
    const paragraf = creaElement("p", classe);
    const negreta = creaElement("strong", "", etiqueta);
    paragraf.appendChild(negreta);

    paragraf.appendChild(document.createTextNode(" " + valor));
    return paragraf;
}

// Crea la capçalera de la targeta: títol del joc i valoració
function creaCapcalera(joc) {
    const capcalera = creaElement("header", "game-header");
    capcalera.appendChild(creaElement("h2", "titol", joc.titol));

    const valoracio = creaElement("span", "rating");
    if (joc.valoracio === null) {
        valoracio.textContent = "★ N/A";
        valoracio.classList.add("rating-pending");
    } else {
        valoracio.textContent = "★ " + joc.valoracio;
    }
    capcalera.appendChild(valoracio);
    return capcalera;
}

// Crea la imatge de portada del joc (amb text alternatiu)
function creaImatge(joc) {
    const imatge = creaElement("img", "imatge");
    imatge.src = joc.imatge;
    imatge.alt = "Portada de " + joc.titol;
    imatge.width = 220;
    imatge.height = 300;
    imatge.loading = "lazy";
    return imatge;
}

// Afegeix al pare la plataforma, el gènere, el preu amb IVA (dos decimals) i l'avís d'estoc si cal
function afegeixDadesJoc(pare, joc) {
    pare.appendChild(creaParagrafAmbEtiqueta("plataforma", "Plataformes:", joc.plataforma));
    pare.appendChild(creaParagrafAmbEtiqueta("genere", "Gèneres:", joc.genere));

    const preuAmbIva = calculaPreuAmbIva(joc.preu).toFixed(2);
    pare.appendChild(creaParagrafAmbEtiqueta("preu", "Preu:", preuAmbIva + " € (IVA inclòs)"));

    if (joc.estoc === 0) {
        pare.appendChild(creaElement("p", "esgotat", "Esgotat"));
    } else if (joc.estoc === 1) {
        pare.appendChild(creaElement("p", "ultimes-unitats", "Última unitat!"));
    } else if (joc.estoc < 5) {
        pare.appendChild(creaElement("p", "ultimes-unitats", `Últimes unitats: queden només ${joc.estoc}`));
    }
}

// Afegeix al pare la fila d'etiquetes (Popular, Pròximament) del joc, si en té alguna
function afegeixBadges(pare, joc) {
    if (joc.popular === false && joc.proximament === false) {
        return;
    }
    const fila = creaElement("p", "badge-row");
    if (joc.popular === true) {
        const popular = creaElement("span", "badge", "Popular");
        popular.classList.add("badge-popular");
        fila.appendChild(popular);
    }
    if (joc.proximament === true) {
        const proximament = creaElement("span", "badge", "Pròximament");
        proximament.classList.add("badge-upcoming");
        fila.appendChild(proximament);
    }
    pare.appendChild(fila);
}

// Si l'estoc és inferior a 5 (el 0 també ho és), la targeta rep la classe estoc-baix
function marcaEstoc(targeta, joc) {
    if (joc.estoc < 5) {
        targeta.classList.add("estoc-baix");
    }
}

// Posa el cor ple o buit segons si el joc és favorit
function actualitzaBotoFavorit(boto, joc) {
    boto.classList.toggle("activat", joc.favorit);
    boto.textContent = joc.favorit ? "♥" : "♡";
    boto.setAttribute("aria-pressed", String(joc.favorit));
    boto.setAttribute("aria-label", "Marcar " + joc.titol + " com a favorit");
}

// Crea el botó del cor: en fer clic, el joc passa a ser favorit o deixa de ser-ho
function creaBotoFavorit(joc) {
    const boto = creaElement("button", "favorit");
    boto.type = "button";
    actualitzaBotoFavorit(boto, joc);
    boto.addEventListener("click", () => {
        joc.favorit = !joc.favorit;
        actualitzaBotoFavorit(boto, joc);
    });
    return boto;
}

// Crea l'enllaç "Reservar": porta al formulari amb el joc ja triat (?joc=...)
function creaEnllacReservar(joc, text = "Reservar") {
    const enllac = creaElement("a", "boto-reservar", text);
    enllac.href = "reserva.html?joc=" + encodeURIComponent(joc.titol);
    return enllac;
}

// Crea la fila de la targeta amb el botó de reservar (o d'avisar si està esgotat) i el de favorit
function creaAccions(joc, textReservar) {
    const accions = creaElement("div", "accions");
    const enllac = creaEnllacReservar(joc, textReservar);
    if (joc.estoc === 0) {
        enllac.textContent = "Avisa'm quan n'hi hagi";
        enllac.classList.add("boto-avisa");
    }
    accions.appendChild(enllac);
    accions.appendChild(creaBotoFavorit(joc));
    return accions;
}

// Crea la targeta (article) normal d'un joc i la retorna
function creaTargeta(joc) {
    const targeta = creaElement("article", "targeta");
    targeta.appendChild(creaCapcalera(joc));
    afegeixBadges(targeta, joc);
    targeta.appendChild(creaImatge(joc));
    afegeixDadesJoc(targeta, joc);
    marcaEstoc(targeta, joc);
    targeta.appendChild(creaElement("h3", "descripcio", joc.descripcio));
    targeta.appendChild(creaAccions(joc));
    return targeta;
}

// Crea la targeta gran del joc destacat, amb compte enrere i botó de reservar
function creaTargetaDestacada(joc) {
    const targeta = creaElement("article", "targeta");
    targeta.classList.add("targeta-destacada");

    const columnaImatge = creaElement("div", "destacada-imatge");
    columnaImatge.appendChild(creaImatge(joc));

    const columnaInfo = creaElement("div", "destacada-info");
    columnaInfo.appendChild(creaElement("p", "etiqueta-llancament", "Llançament imminent · " + TEXT_LLANCAMENT));
    columnaInfo.appendChild(creaCapcalera(joc));
    afegeixBadges(columnaInfo, joc);
    columnaInfo.appendChild(creaCompteEnrere());
    afegeixDadesJoc(columnaInfo, joc);
    columnaInfo.appendChild(creaElement("h3", "descripcio", joc.descripcio));
    columnaInfo.appendChild(creaAccions(joc, "Reservar ara"));

    targeta.appendChild(columnaImatge);
    targeta.appendChild(columnaInfo);
    marcaEstoc(targeta, joc);
    return targeta;
}

const contenidor = document.querySelector("#contenidor-jocs");

// Crea una targeta per cada joc de la llista (gran si és el destacat) i les afegeix al contenidor
function pintaCataleg(llista) {
    llista.forEach((joc) => {
        const targeta = joc.destacat === true ? creaTargetaDestacada(joc) : creaTargeta(joc);
        contenidor.appendChild(targeta);
    });
}

const cercador = document.querySelector("#cerca");
const selectPlataforma = document.querySelector("#filtre-plataforma");
const selectOrdre = document.querySelector("#ordre");
const casellaEstoc = document.querySelector("#nomes-estoc");
const campPreuMaxim = document.querySelector("#preu-maxim");
const botoNeteja = document.querySelector("#neteja-filtres");
const comptador = document.querySelector("#comptador");
const missatgeBuit = document.querySelector("#missatge-buit");

// Retorna la valoració d'un joc com a número (sense valoració compta com -1, per anar l'últim)
function valorValoracio(joc) {
    return joc.valoracio === null ? -1 : joc.valoracio;
}

// Retorna una còpia de la llista ordenada segons el criteri triat al select
function ordenaJocs(llista, criteri) {
    const copia = llista.slice();
    if (criteri === "preu-asc") {
        copia.sort((a, b) => a.preu - b.preu);
    } else if (criteri === "preu-desc") {
        copia.sort((a, b) => b.preu - a.preu);
    } else if (criteri === "valoracio") {
        copia.sort((a, b) => valorValoracio(b) - valorValoracio(a));
    } else if (criteri === "titol") {
        copia.sort((a, b) => a.titol.localeCompare(b.titol));
    }
    return copia;
}

// Llegeix tots els controls, filtra i ordena els jocs, i repinta el catàleg, el comptador i el missatge
function actualitzaCataleg() {
    const text = cercador.value.trim().toLowerCase();
    const plataforma = selectPlataforma.value;
    const nomesAmbEstoc = casellaEstoc.checked;
    const textPreu = campPreuMaxim.value.trim();
    const preuMaxim = textPreu === "" ? null : Number(textPreu);

    const filtrats = jocs.filter((joc) => {
        const coincideixTitol = joc.titol.toLowerCase().includes(text);
        const coincideixPlataforma = plataforma === "Totes" || joc.plataforma.includes(plataforma);
        const teEstoc = !nomesAmbEstoc || joc.estoc > 0;
        const dinsDelPreu = preuMaxim === null || isNaN(preuMaxim) || calculaPreuAmbIva(joc.preu) <= preuMaxim;
        return coincideixTitol && coincideixPlataforma && teEstoc && dinsDelPreu;
    });

    const ordenats = ordenaJocs(filtrats, selectOrdre.value);
    const destacats = ordenats.filter((joc) => joc.destacat === true);
    const resta = ordenats.filter((joc) => joc.destacat !== true);

    contenidor.textContent = "";
    pintaCataleg(destacats.concat(resta));

    comptador.textContent = `Mostrant ${filtrats.length} de ${jocs.length} jocs`;

    missatgeBuit.classList.toggle("ocult", filtrats.length > 0);
}

// Posa tots els controls als valors per defecte i repinta el catàleg
function netejaFiltres() {
    cercador.value = "";
    selectPlataforma.value = "Totes";
    selectOrdre.value = "defecte";
    casellaEstoc.checked = false;
    campPreuMaxim.value = "";
    actualitzaCataleg();
}

cercador.addEventListener("input", actualitzaCataleg);
selectPlataforma.addEventListener("change", actualitzaCataleg);
selectOrdre.addEventListener("change", actualitzaCataleg);
casellaEstoc.addEventListener("change", actualitzaCataleg);
campPreuMaxim.addEventListener("input", actualitzaCataleg);
botoNeteja.addEventListener("click", netejaFiltres);

actualitzaCataleg();