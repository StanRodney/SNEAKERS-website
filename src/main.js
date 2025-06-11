import'./output.css'

    const navBtn = document.querySelector('#menu');
    const menuBar = document.querySelector('#mobileMenu');

    navBtn.addEventListener('click', () => {
      const isExpanded = navBtn.getAttribute('aria-expanded') === 'true';
      navBtn.setAttribute('aria-expanded', !isExpanded);
      menuBar.classList.toggle('hidden');
      menuBar.classList.toggle('flex');
    });
 