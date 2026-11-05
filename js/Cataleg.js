const jocs = [
    {
        titol: "GTA 1",
        genere: "Acció / Món Obert",
        plataforma: "PC / PS1",
        preu: 69.99,
        valoracio: 8,
        estoc: 12,
        imatge: "../img/GTA.jpg",
        descripcio: "El joc que ho va començar tot. Experimenta el primer capítol de l'acció criminal en un món obert, on tu tries on anar i a qui robar."
    },
    {
        titol: "GTA 2",
        genere: "Acció / Món Obert",
        plataforma: "PC / PS1",
        preu: 49.99,
        valoracio: 8.2,
        estoc: 3,
        imatge: "../img/GTA 2.jpg",
        descripcio: "El respecte ho és tot. A Anywhere City, el crim està dividit en diverses bandes. Treballa per a elles, guanya el seu respecte i destrueix els teus enemics."
    },
    {
        titol: "GTA III",
        genere: "Acció / Món Obert",
        plataforma: "PS2 / PC",
        preu: 33.99,
        valoracio: 9.3,
        estoc: 20,
        imatge: "../img/GTA III.jpg",
        descripcio: "El crim sí que compensa. La saga de gran èxit i alta controvèrsia fa el salt a les 3 dimensions en el fosc i sòrdid submón de Liberty City. Amb la llibertat d'anar a qualsevol lloc i atracar a qualsevol persona."
    },
    {
        titol: "GTA Vice City",
        genere: "Acció / Món Obert",
        plataforma: "PS2 / PC",
        preu: 99.99,
        valoracio: 9.5,
        estoc: 0,
        imatge: "../img/GTA Vice City.jpg",
        descripcio: "Benvingut als anys vuitanta. De la dècada de les grans cabelleres, l'excés i els vestits de tons pastís, arriba la història de l'ascens d'un home al cim de l'imperi criminal."
    },
    {
        titol: "GTA San Andreas",
        genere: "Acció / Món Obert",
        plataforma: "PS2 / PC",
        preu: 129.99,
        valoracio: 10,
        estoc: 8,
        imatge: "../img/GTA San Andreas.jpg",
        descripcio: "Fa cinc anys, en Carl Johnson va escapar de les pressions de Los Santos, San Andreas, una ciutat destrossada per les bandes, les drogues i la corrupció. Ara, a principis dels noranta, en CJ ha de tornar a casa."
    },
    {
        titol: "GTA Advance",
        genere: "Acció / Món Obert",
        plataforma: "Game Boy Advance",
        preu: 4,
        valoracio: 7,
        estoc: 15,
        imatge: "../img/GTA Advance.jpg",
        descripcio: "Torna als carrers de Liberty City des d'una nova perspectiva. Centenars d'hores de joc amb tota l'acció clàssica de GTA dissenyada per a la consola portàtil."
    },
    {
        titol: "GTA IV",
        genere: "Acció / Món Obert",
        plataforma: "PS3 / Xbox 360 / PC",
        preu: 599.99,
        valoracio: 10,
        estoc: 4,
        imatge: "../img/GTA IV.jpg",
        descripcio: "Què significa avui dia el somni americà? Per a en Niko Bellic, acabat d'arribar d'Europa en vaixell, és l'esperança de poder escapar del seu passat. Per al seu cosí, en Roman, és la visió que junts poden fer fortuna a Liberty City."
    },
    {
        titol: "GTA Chinatown Wars",
        genere: "Acció / Món Obert",
        plataforma: "Nintendo DS / PSP",
        preu: 1.99,
        valoracio: 9,
        estoc: 6,
        imatge: "../img/GTA Chinatown Wars.jpg",
        descripcio: "Després de l'assassinat del seu pare, en Huang Lee té una missió molt senzilla: portar una espasa antiga al seu oncle Kenny per assegurar-se que la seva família conservi el control de les tríades de Liberty City."
    },
    {
        titol: "GTA V",
        genere: "Acció / Món Obert",
        plataforma: "PS4 / Xbox One / PC",
        preu: 1999.99,
        valoracio: 9.7,
        estoc: 50,
        imatge: "../img/GTA V.jpg",
        descripcio: "Quan un jove estafador del carrer, un atracador de bancs retirat i un psicòpata aterridor es veuen involucrats amb el pitjor de l'inframon criminal, el govern dels EUA i la indústria de l'espectacle, hauran de dur a terme una sèrie de perillosos cops per sobreviure."
    },
    {
        titol: "GTA VI",
        genere: "Acció / Món Obert",
        plataforma: "PS5 / Xbox Series X",
        preu: 999999.99,
        valoracio: null,
        estoc: 25,
        imatge: "../img/GTA VI.jpg",
        descripcio: "Grand Theft Auto VI viatja a l'estat de Leonida, on es troben els carrers banyats per neons de Vice City i els seus voltants, en l'evolució més gran i immersiva de la saga Grand Theft Auto fins ara."
    }
];

const TIPUS_IVA = 21;

function calculaPreuAmbIva(preu) {
    return preu * (1 + TIPUS_IVA / 100);
}

function creaElement(etiqueta, classe, text = "") {
    const element = document.createElement(etiqueta);
    if (classe) {
        element.classList.add(classe);
    }
    element.textContent = text;
    return element;
}

function creaParagrafAmbEtiqueta(classe, etiqueta, valor) {
    const paragraf = creaElement("p", classe);
    const negreta = creaElement("strong", "", etiqueta);
    paragraf.appendChild(negreta);
    // textContent no pot barrejar <strong> amb text, per això afegim el valor com a node de text
    paragraf.appendChild(document.createTextNode(" " + valor));
    return paragraf;
}

function creaTargeta(joc) {
    const targeta = creaElement("article", "targeta");

    // Capçalera: títol i valoració
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
    targeta.appendChild(capcalera);

    const imatge = creaElement("img", "imatge");
    imatge.src = joc.imatge;
    imatge.alt = "Portada de " + joc.titol;
    imatge.width = 220;
    imatge.height = 300;
    targeta.appendChild(imatge);

    // Plataforma, gènere i preu (amb IVA i dos decimals)
    targeta.appendChild(creaParagrafAmbEtiqueta("plataforma", "Plataformes:", joc.plataforma));
    targeta.appendChild(creaParagrafAmbEtiqueta("genere", "Gèneres:", joc.genere));
    const preuAmbIva = calculaPreuAmbIva(joc.preu).toFixed(2);
    targeta.appendChild(creaParagrafAmbEtiqueta("preu", "Preu:", preuAmbIva + " €"));
    if (joc.estoc === 0) {
        targeta.classList.add("estoc-baix");
        targeta.appendChild(creaElement("p", "esgotat", "Esgotat"));
    } else if (joc.estoc < 5) {
        targeta.classList.add("estoc-baix");
    }

    // Descripció
    targeta.appendChild(creaElement("h3", "descripcio", joc.descripcio));

    return targeta;
}


// Contenidor buit de l'HTML on van les targetes
const contenidor = document.querySelector("#contenidor-jocs");

// Crea una targeta per cada joc de la llista rebuda i les afegeix al contenidor
function pintaCataleg(llista) {
    // forEach rep una arrow function com a callback: s'executa un cop per joc
    llista.forEach((joc) => {
        contenidor.appendChild(creaTargeta(joc));
    });
}

pintaCataleg(jocs);