import img from './assets/burger.jpg';

const displayHome = (mainContent) => {
  mainContent.innerHTML = '';

  const headLine = document.createElement('h1');
  headLine.textContent = "Moji's Amazing Burgers";

  const burgerPic = document.createElement('img');
  burgerPic.className = 'img-fluid';
  burgerPic.src = img;

  const paraG = document.createElement('p');
  paraG.textContent = 'The crunchiest fries and juiciest burgers you will ever have';

  mainContent.appendChild(headLine);
  mainContent.appendChild(burgerPic);
  mainContent.appendChild(paraG);

  return mainContent;
};

export default displayHome;