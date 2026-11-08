# 🎮 Dogstar Games Store · RA3

- 🛒 **Catàleg (Part A):** `js/cataleg.js` → dades a `jocs`, targetes amb el DOM a `creaTargeta`, preu amb IVA a `calculaPreuAmbIva`, estoc baix i «Esgotat» a `marcaEstoc` i `afegeixDadesJoc`.

- 🔎 **Cerca i filtre (Part B):** `js/cataleg.js` → `actualitzaCataleg` llegeix cerca, plataforma, ordre i filtres, esborra el catàleg i el repinta amb `pintaCataleg` (comptador i «No s'ha trobat cap joc» inclosos).

- 📝 **Formulari (Part C):** `js/contacte.js` → una validació per camp (`validaNom`, `validaEmail`, `validaQuantitat`...), errors amb `mostraError` / `eliminaError`, comptador a `actualitzaComptador` i resum a `mostraResum`.

- 🌙 **Mode fosc (Part D):** `js/tema.js` → `canviaTema` alterna la classe `light-mode` a `<body>` amb `classList.toggle()` i canvia la icona (🌙 / ☀️).

- ⭐ **Extres:** compte enrere (`js/compteenrere.js`), targeta destacada de GTA VI (`creaTargetaDestacada`), captures ampliables (`js/fitxa.js`) i «Reservar» amb el joc ja triat (`preseleccionaJocDeLAdreca`).

- 🔒 **const o let:** `const TIPUS_IVA` perquè el 21 % no canvia mai; no he necessitat cap `let` perquè cap variable es torna a assignar.

- 🔁 **Callback:** `actualitzaCataleg` es passa sense parèntesis a `addEventListener("input", ...)`, i dins seu l'arrow function de `filter` decideix per a cada joc si compleix cerca i filtres.

- 📌 **Decisions:** el formulari de contacte és `reserva.html`, i el rang de la quantitat és d'1 a 10 unitats (explicat en un comentari a `contacte.js`).
