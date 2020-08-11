const menuPage = () => {
  const mainMenuDiv = document.createElement('div');
  mainMenuDiv.setAttribute('class', 'hide-menu');
  mainMenuDiv.setAttribute('id', 'main-menu-div');

  const menu = document.createElement('div');
  menu.setAttribute('id', 'main-menu');

  mainMenuDiv.appendChild(menu);

  // const menuHeader = document.createElement('h2');
  // menuHeader.innerHTML = 'Our Menu';
  //
  // menu.appendChild(menuHeader);

  const menuDishes = document.createElement('div');
  menuDishes.setAttribute('class', 'menu-dish, d-flex, flex-column');

  mainMenuDiv.appendChild(menuDishes);

  const menuItems = document.createElement('div');
  menuItems.setAttribute('class', 'menu-items');


  const divOne = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('class', 'chapo');
  img.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg';

  const menuParagraph = document.createElement('p');
  menuParagraph.setAttribute('id', 'text');
  menuParagraph.innerHTML = 'Chapati & Maharagwe';


  const divTwo = document.createElement('div');
  const img1 = document.createElement('img');
  img1.setAttribute('class', 'chapo');
  img1.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg';

  const menuParagraphTwo = document.createElement('p');
  menuParagraphTwo.setAttribute('id', 'text');
  menuParagraphTwo.innerHTML = 'Chapati & Maharagwe';

  const divThree = document.createElement('div');
  const img2 = document.createElement('img');
  img2.setAttribute('class', 'chapo');
  img2.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg';

  const menuParagraphThree = document.createElement('p');
  menuParagraphThree.setAttribute('id', 'text');
  menuParagraphThree.innerHTML = 'Chapati & Maharagwe';


  const menuItems1 = document.createElement('div');
  menuItems1.setAttribute('class', 'menu-items');


  const divFour = document.createElement('div');
  const img4 = document.createElement('img');
  img4.setAttribute('class', 'chapo');
  img4.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg';

  const menuParagraphFour = document.createElement('p');
  menuParagraphFour.setAttribute('id', 'text');
  menuParagraphFour.innerHTML = 'Chapati & Maharagwe';


  const divFive = document.createElement('div');
  const img5 = document.createElement('img');
  img5.setAttribute('class', 'chapo');
  img5.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg';

  const menuParagraphFive = document.createElement('p');
  menuParagraphFive.setAttribute('id', 'text');
  menuParagraphFive.innerHTML = 'Chapati & Maharagwe';

  const divSix = document.createElement('div');
  const img6 = document.createElement('img');
  img6.setAttribute('class', 'chapo');
  img6.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg';

  const menuParagraphSix = document.createElement('p');
  menuParagraphSix.setAttribute('id', 'text');
  menuParagraphSix.innerHTML = 'Chapati & Maharagwe';


  menuDishes.appendChild(menuItems);
  menuItems.appendChild(divOne);
  divOne.appendChild(img);
  divOne.appendChild(menuParagraph);
  menuItems.appendChild(divTwo);
  divTwo.appendChild(img1);
  divTwo.appendChild(menuParagraphTwo);
  menuItems.appendChild(divThree);
  divThree.appendChild(img2);
  divThree.appendChild(menuParagraphThree);
  menuDishes.appendChild(menuItems1);
  menuItems1.appendChild(divFour);
  divFour.appendChild(img4);
  divFour.appendChild(menuParagraphFour);
  menuItems1.appendChild(divFive);
  divFive.appendChild(img5);
  divFive.appendChild(menuParagraphFive);
  menuItems1.appendChild(divSix);
  divSix.appendChild(img6);
  divSix.appendChild(menuParagraphSix);
  // menuItems.appendChild(img1);
  // menuItems.appendChild(img2);
  // menuItems.appendChild(img3);
  // menuItems.appendChild(img4);
  // menuItems.appendChild(img5);

  return mainMenuDiv;
};

export default menuPage;
