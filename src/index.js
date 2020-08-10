import navPage from './navbar';
import mainImage from './homepage';
import contactPage from './contact';
import menuPage from './menu';


//
// const displayPage = () => {
const navShow = navPage();
const landingPage = mainImage();
const showContact = contactPage();
const showMenu = menuPage();

const content = document.querySelector('#main');

const show = (section) => {
  content.innerHTML = '';
  content.appendChild(navShow);
  content.appendChild(section);
};

show(landingPage);

const homeMain = document.getElementById('home');
const menuMain = document.getElementById('menu');
const contactMain = document.querySelector('#contact-us');

const displaySection = (x) => {
  if (x.target === homeMain) {
    show(landingPage);
  } else if (x.target === menuMain) {
    show(showMenu);
  } else {
    show(showContact);
  }
};


homeMain.addEventListener('click', displaySection);
menuMain.addEventListener('click', displaySection);
contactMain.addEventListener('click', displaySection);
// document.getElemementById('home').addEventListener('click', () => {
//   const displayContentHome = document.querySelector('.hide-main')
//
//   document.querySelector('.main-menu-div').classList.add('hide-menuPage')
//
//   if (displayContentHome) {
//     document.querySelector('.')
//   }
//
//
// })
// }
