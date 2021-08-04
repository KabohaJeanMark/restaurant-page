import displayHome from './home';
import './style.css';

const bodyContent = document.getElementById('content');

const mainContent = document.createElement('div');
mainContent.classList.add('container', 'center');

const navMenu = document.createElement('nav');
navMenu.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-primary');

const spanBrand = document.createElement('span');
spanBrand.classList.add('navbar-brand');
spanBrand.textContent = "Moji's restaurant";

const menuBtns = document.createElement('ul');
menuBtns.className = 'navbar-nav';

const homeBtn = document.createElement('li');
homeBtn.classList.add('nav-link');
homeBtn.textContent = 'Home';
homeBtn.addEventListener('click', () => {
  displayHome(mainContent);
});

const menuBtn = document.createElement('li');
menuBtn.className = 'nav-link';
menuBtn.textContent = 'Menu';

const contactBtn = document.createElement('li');
contactBtn.className = 'nav-link';
contactBtn.textContent = 'Contact';

menuBtns.appendChild(homeBtn);
menuBtns.appendChild(menuBtn);
menuBtns.appendChild(contactBtn);

navMenu.appendChild(spanBrand);
navMenu.appendChild(menuBtns);

bodyContent.appendChild(navMenu);

bodyContent.appendChild(mainContent);

displayHome(mainContent);
