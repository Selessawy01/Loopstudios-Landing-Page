
console.log("JS is working");
const hamburgerButton = document.querySelector('.header__toggle');
const headerNav= document.querySelector('.header__nav');
const closeButton = document.querySelector('.nav__close-btn');

//Open Menu
hamburgerButton.addEventListener('click',()=>{
  const isOpen=headerNav.classList.add('is-open');
  hamburgerButton.setAttribute('aria-expanded', isOpen);
  hamburgerButton.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

//Close Button

closeButton.addEventListener('click',()=>{
  headerNav.classList.remove('is-open');
  headerNav.setAttribute('aria-hidden', true);
  headerNav.setAttribute('aria-hidden', true);
  document.body.style.overflow = '';
});

// Prevent default for # links
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

// close menu on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && headerNav.classList.contains('is-open')) {
    headerNav.classList.remove('is-open');
    document.body.style.overflow = '';
    hamburgerButton.setAttribute('aria-expanded', false);
  }
});
