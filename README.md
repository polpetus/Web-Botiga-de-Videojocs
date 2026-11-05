# 🎮 Dogstar Games Store - Web Botiga de Videojocs

![Versió](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Estat](https://img.shields.io/badge/status-Completat-brightgreen.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

Un lloc web dissenyat com a projecte acadèmic per al cicle de **Desenvolupament d'Aplicacions Multiplataforma i Videojocs (DAM-VI)** de l'Institut Tecnològic de Barcelona (ITB).

El projecte simula una botiga virtual especialitzada en els jocs de Rockstar Games, anomenada **Dogstar Games Store**, i inclou un catàleg de jocs, una fitxa detallada i un formulari de reserva interactiu.

---

## 📌 Taula de Continguts

- [Característiques i Pàgines](#-característiques-i-pàgines)
- [Tecnologies Utilitzades](#-tecnologies-utilitzades)
- [Disseny i Interfície (UI/UX)](#-disseny-i-interfície-uiux)
- [Estructura del Projecte](#-estructura-del-projecte)
- [Com visualitzar el projecte](#-com-visualitzar-el-projecte)
- [Autor](#-autor)

---

## ✨ Característiques i Pàgines

El lloc web consta de 3 pàgines principals:

1. **Catàleg de Videojocs (`web cataleg videojocs .html`):**
   - Llistat complet de la saga Grand Theft Auto (des del GTA 1 fins al GTA VI).
   - Sistema de "cards" (targetes) per a cada joc amb la caràtula, gèneres, preu, sinopsi i una puntuació de valoració (rating).
   - Insígnies o *badges* (ex: "Popular", "Pròximament") per destacar jocs específics.

2. **Fitxa de Producte (`fitxa.html`):**
   - Pàgina de detall centrada en l'imminent llançament de **GTA VI**.
   - Taula de característiques tècniques (gènere, plataforma, desenvolupador, data de llançament).
   - Descripció completa del joc i la seva història.
   - Tràiler oficial integrat amb etiqueta `<video>`.
   - Galeria de captures destacades del *gameplay*.

3. **Formulari de Reserva (`formulari reserva.html`):**
   - Formulari complet per reservar qualsevol joc del catàleg.
   - Camps per a dades de l'usuari (nom, email, telèfon).
   - Selecció del joc mitjançant un menú desplegable (incloent-hi des de l'original fins a entregues portàtils com el Chinatown Wars).
   - Selecció de quantitat, mètode de pagament i condicions d'acceptació.

---

## 🚀 Tecnologies Utilitzades

- **HTML5:** Semàntica estructurada utilitzant etiquetes com `<header>`, `<nav>`, `<main>`, `<section>`, i `<footer>` per a una bona accessibilitat.
- **CSS3:**
  - Variables (Custom Properties) per a una paleta de colors coherent (Tons foscos, liles i roses estètica *synthwave/Vice City*).
  - `CSS Grid` per a la presentació del catàleg en columnes responsives.
  - `Flexbox` per a l'alineació de capçaleres, navegació i etiquetes.
  - Tipografia de Google Fonts: *Bebas Neue* per als títols i tipografies sans-serif per als textos.

---

## 🎨 Disseny i Interfície (UI/UX)

La web ha estat dissenyada pensant en un entorn "gamer":
- **Paleta de Colors:** Fons fosc (`#1b1024` i `#2d1a38`) amb accents cridaners en lila (`#a65bd4`) i rosa (`#ff5ca8`), recordant l'estètica neó.
- **Disseny Responsiu:** La web s'adapta a tota mena de pantalles gràcies a l'ús de Media Queries (`@media`), reestructurant la graella i la navegació en dispositius mòbils.
- **Accessibilitat:** Ús d'etiquetes `aria-label` en la navegació i disseny clar de taules amb atributs com `scope="row"`.

---

## 📁 Estructura del Projecte

```text
Web-Botiga-de-Videojocs/
├── css/
│   └── estils.css                # Full d'estils principal
├── img/                          # Totes les imatges de la web
│   ├── logo dogstar.png
│   ├── GTA VI.jpg
│   ├── GTA VI Launch Trailer.mp4 # Tràiler de la fitxa
│   └── [altres caràtules de GTA]
├── html/
│   ├── web cataleg videojocs .html # Pàgina d'Inici / Catàleg
│   ├── fitxa.html                  # Detall de GTA VI
│   └── formulari reserva.html      # Pàgina de compra/reserva
└── README.md                       # Aquest arxiu de documentació
