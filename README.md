# 🌐 Portfolio Personale

Questo progetto è un **sito portfolio** sviluppato come **Single Page Application (SPA)** con **React**.  
Il portfolio ha lo scopo di presentare chi sono, i miei progetti, le mie competenze e fornire un modo per contattarmi.

---

## 🚀 Tecnologie utilizzate

- **React** → gestione delle pagine e componenti come SPA
- **HTML5 / CSS3 / JavaScript (ES6+)**
- **Bootstrap** → per layout responsive e stile
- **reCAPTCHA v2/v3** → protezione contro lo spam nei form
- **Formspree** → gestione dell’invio dei messaggi di contatto
- **FileZilla + hosting (MariaDB incluso)** → per pubblicazione

---

## 📂 Struttura del progetto

- **`/src`** → codice sorgente React
  - `components/` → componenti riutilizzabili (Navbar, Footer, ecc.)
  - `pages/` → pagine principali del portfolio
- **`/public`** → file statici (favicon, immagini, `index.html`)
- **`/build`** → cartella generata automaticamente con la versione pronta alla pubblicazione
- **`package.json`** → configurazioni del progetto e dipendenze

---

## 📑 Pagine del Portfolio

Il sito è strutturato come una **SPA con routing**, quindi ogni "pagina" in realtà è una sezione gestita da React Router.

- **🏠 Home** → Introduzione, frase di benvenuto e collegamenti rapidi alle altre sezioni.
- **👤 About Me** → Breve biografia, esperienze e competenze tecniche.
- **💼 Projects** → Lista dei progetti con card (immagine, descrizione, link a GitHub o demo).
- **📞 Contact** → Form per inviare messaggi direttamente via **Formspree** (protetto da reCAPTCHA).
- **🔗 Footer** → Contatti rapidi e link social.

---

## 🛠️ Come pubblicare su hosting

1. Clona o scarica il progetto:
   ```bash
   git clone <repository-url>
   ```
