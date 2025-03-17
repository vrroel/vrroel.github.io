function initLinkActivo() {
  const links = document.querySelectorAll('.menu a');
  if(links.length) {
    function activarLink(link) {
      const url = location.href;
      const href = link.href;

      if(url.includes(href)) {
        link.classList.add('active')
      }
    }

    links.forEach(activarLink)
  }
}

initLinkActivo();


// typed

var typed = new Typed('.typed', {
  strings: ['Desarrollo Web^1000 Front-End'],
  typeSpeed: 100,
  backSpeed: 50,
  // loop: true,
  startDelay: 1000,
  cursorChar: '_',
})

// date

const year = new Date();
const date_year = document.querySelector('.date-year');
date_year.innerHTML = year.getFullYear();