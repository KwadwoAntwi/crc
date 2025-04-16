let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let searchdonate = document.querySelector('.header .btn-group');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let sedonlinks = document.querySelectorAll('header .btn-group a');
let menuContent = document.querySelector('.menu-content');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        let target = document.querySelector('header nav a[href*="' + id + '"]');
        if (target) target.classList.add('active');
      });

      sedonlinks.forEach(links => {
        links.classList.remove('active');
        let target = document.querySelector('header .btn-group a[href*="' + id + '"]');
        if (target) target.classList.add('active');
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  menuContent.classList.toggle('active');
};
