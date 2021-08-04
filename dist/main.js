/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zb2xlLmxvZyhcIkhleSB0aGVyZSBmcm9tIGNvb2wgcmVzdGF1cmFudFwiKTtcblxuY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xubmF2TWVudS5jbGFzc0xpc3QuYWRkKCduYXZiYXInLCAnbmF2YmFyLWV4cGFuZC1sZycsICduYXZiYXItZGFyaycsICdiZy1wcmltYXJ5Jyk7XG5cbmNvbnN0IHNwYW5CcmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbnNwYW5CcmFuZC5jbGFzc0xpc3QuYWRkKCduYXZiYXItYnJhbmQnKTtcbnNwYW5CcmFuZC50ZXh0Q29udGVudCA9IFwiTW9qaSdzIHJlc3RhdXJhbnRcIjtcblxuY29uc3QgbWVudUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubWVudUJ0bnMuY2xhc3NOYW1lID0gJ25hdmJhci1uYXYnO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmhvbWVCdG4uY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rXCIpO1xuaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbm1lbnVCdG4uY2xhc3NOYW1lID0gXCJuYXYtbGlua1wiO1xubWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnRhY3RCdG4uY2xhc3NOYW1lID0gXCJuYXYtbGlua1wiO1xuY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG5tZW51QnRucy5hcHBlbmRDaGlsZChob21lQnRuKTtcbm1lbnVCdG5zLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xubWVudUJ0bnMuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbm5hdk1lbnUuYXBwZW5kQ2hpbGQoc3BhbkJyYW5kKTtcbm5hdk1lbnUuYXBwZW5kQ2hpbGQobWVudUJ0bnMpO1xuXG5ib2R5Q29udGVudC5hcHBlbmRDaGlsZChuYXZNZW51KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=