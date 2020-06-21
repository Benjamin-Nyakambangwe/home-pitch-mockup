const openNavLink = document.getElementById('open-nav-link');
const nav = document.getElementById('nav');

openNavLink.addEventListener('click', openNav);

//Open Nav on mobile
function openNav() {
  console.log('Hamburger Woking');

  if (nav.style.display != 'none') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
    console.log('else working');
  }
}