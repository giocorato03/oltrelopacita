const aboutBtn = document.getElementById('aboutBtn');
const aboutDiv = document.getElementById('about');
const overlay = document.querySelector('.overlay-blur');
const closeAbout = document.querySelector('.quit_about div');
const isMobile = window.innerWidth <= 768;

aboutBtn.addEventListener('click', () => {
    aboutDiv.classList.add('show');
    overlay.classList.add('show');   // mostra overlay con blur+bianco
});

closeAbout.addEventListener('click', () => {
  if (isMobile) {
    aboutDiv.classList.remove('show');
  } else {
    aboutDiv.classList.remove('show');
    overlay.classList.remove('show');
  }
    
});

document.querySelectorAll('.cont_pratica').forEach(card => {
    card.addEventListener('click', () => {

        // chiude tutte le altre pratiche
        document.querySelectorAll('.cont_pratica.open').forEach(openCard => {
            if (openCard !== card) {
                openCard.classList.remove('open');
            }
        });

        // apre / chiude quella cliccata
        card.classList.toggle('open');
    });
});

// Gestione hamburger e overlay blur mobile
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.getElementById('icona');

hamburgerIcon.addEventListener('click', () => {
    menu.classList.add('show');
    overlay.classList.add('show'); // menu sopra overlay
});

// chiusura solo tramite la X
const hamburgerClose = document.getElementById('esci');

hamburgerClose.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});

const aboutBtn2 = document.getElementById('aboutBtn2');

aboutBtn2.addEventListener('click', () => {
  aboutDiv.classList.add('show');   // mostra overlay con blur+bianco
});

const chiuditi = document.getElementById('chiudi2');

chiuditi.addEventListener('click', () => {
  aboutDiv.classList.remove('show'); // rimuove overlay
});