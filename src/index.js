import displayHome from './home';
import showMenu from './menu';
import contactPage from './contact';
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

const homeBtn = document.createElement('a');
homeBtn.classList.add('nav-link', 'm-2', 'p-2');
homeBtn.textContent = 'Home';
homeBtn.addEventListener('click', () => {
  displayHome(mainContent);
});

const menuBtn = document.createElement('a');
menuBtn.classList.add('nav-link', 'm-2', 'p-2');
menuBtn.textContent = 'Menu';
menuBtn.addEventListener('click', () => {
  showMenu(mainContent);
});

const contactBtn = document.createElement('a');
contactBtn.classList.add('nav-link', 'm-2', 'p-2');
contactBtn.textContent = 'Contact';
contactBtn.addEventListener('click', () => {
  contactPage(mainContent);
});

menuBtns.appendChild(homeBtn);
menuBtns.appendChild(menuBtn);
menuBtns.appendChild(contactBtn);

navMenu.appendChild(spanBrand);
navMenu.appendChild(menuBtns);

bodyContent.appendChild(navMenu);

bodyContent.appendChild(mainContent);

displayHome(mainContent);
