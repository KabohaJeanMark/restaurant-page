const bodyContent = document.getElementById('content');

console.log("Hey there from cool restaurant");

const navMenu = document.createElement('nav');
navMenu.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-primary');

const spanBrand = document.createElement('span');
spanBrand.classList.add('navbar-brand');
spanBrand.textContent = "Moji's restaurant";

const menuBtns = document.createElement('ul');
menuBtns.className = 'navbar-nav';

const homeBtn = document.createElement('li');
homeBtn.classList.add("nav-link");
homeBtn.textContent = "Home";

const menuBtn = document.createElement('li');
menuBtn.className = "nav-link";
menuBtn.textContent = "Menu";

const contactBtn = document.createElement('li');
contactBtn.className = "nav-link";
contactBtn.textContent = "Contact";

menuBtns.appendChild(homeBtn);
menuBtns.appendChild(menuBtn);
menuBtns.appendChild(contactBtn);

navMenu.appendChild(spanBrand);
navMenu.appendChild(menuBtns);

bodyContent.appendChild(navMenu);