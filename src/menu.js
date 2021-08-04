import imgC from './assets/chicken-burger.png';
import imgV from './assets/vegie-burger.png';
import imgT from './assets/turkey-burger.png';

const showMenu = (mainContent) => {
  mainContent.innerHTML = '';

  const burgerHeading = document.createElement('h2');
  burgerHeading.textContent = 'Burger Menu';

  const burgerContainer = document.createElement('div');
  burgerContainer.classList.add('grid-box');

  const chickenBurger = document.createElement('div');
  const chickenBurgerimage = document.createElement('img');
  chickenBurgerimage.classList.add('img-fluid');
  chickenBurgerimage.src = imgC;
  const chickenBurgerHead = document.createElement('h4');
  chickenBurgerHead.textContent = 'Chicken Burger';
  const chickenBurgerPrice = document.createElement('p');
  chickenBurgerPrice.textContent = '5$';
  chickenBurger.appendChild(chickenBurgerimage);
  chickenBurger.appendChild(chickenBurgerHead);
  chickenBurger.appendChild(chickenBurgerPrice);

  const veganBurger = document.createElement('div');
  const vegieBurgerimage = document.createElement('img');
  vegieBurgerimage.classList.add('img-fluid');
  vegieBurgerimage.src = imgV;
  const veganBurgerHead = document.createElement('h4');
  veganBurgerHead.textContent = 'Vegan Burger';
  const veganBurgerPrice = document.createElement('p');
  veganBurgerPrice.textContent = '4$';
  veganBurger.appendChild(vegieBurgerimage);
  veganBurger.appendChild(veganBurgerHead);
  veganBurger.appendChild(veganBurgerPrice);

  const turkeyBurger = document.createElement('div');
  const turkeyBurgerimage = document.createElement('img');
  turkeyBurgerimage.classList.add('img-fluid');
  turkeyBurgerimage.src = imgT;
  const turkeyBurgerHead = document.createElement('h4');
  turkeyBurgerHead.textContent = 'Turkey Burger';
  const turkeyBurgerPrice = document.createElement('p');
  turkeyBurgerPrice.textContent = '6$';
  turkeyBurger.appendChild(turkeyBurgerimage);
  turkeyBurger.appendChild(turkeyBurgerHead);
  turkeyBurger.appendChild(turkeyBurgerPrice);

  burgerContainer.appendChild(chickenBurger);
  burgerContainer.appendChild(veganBurger);
  burgerContainer.appendChild(turkeyBurger);

  mainContent.appendChild(burgerHeading);
  mainContent.appendChild(burgerContainer);
  return mainContent;
};

export default showMenu;