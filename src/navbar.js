const navPage = () => {
  const navDiv = document.createElement('div');
  navDiv.setAttribute('class', 'gold-tab');

  const navSecDiv = document.createElement('div');
  navSecDiv.setAttribute('class', 'gold-nav-div');
  const topNav = document.createElement('nav');
  topNav.setAttribute('class', 'goldtabs dark');
  const ulItem = document.createElement('ul');
  ulItem.setAttribute('id', 'horizontal-list');
  const listItem = document.createElement('li');
  const listItema = document.createElement('a');
  listItema.setAttribute('id', 'home');
  listItema.innerHTML = 'Home';
  const listItem1 = document.createElement('li');
  const listItema1 = document.createElement('a');
  listItema1.setAttribute('id', 'menu');
  listItema1.innerHTML = 'Menu';
  const listItem2 = document.createElement('li');
  const listItema2 = document.createElement('a');
  listItema2.setAttribute('id', 'contact-us');
  listItema2.innerHTML = 'Contact Us';

  navDiv.appendChild(navSecDiv);
  navSecDiv.appendChild(topNav);
  topNav.appendChild(ulItem);
  ulItem.appendChild(listItem);
  listItem.appendChild(listItema);
  ulItem.appendChild(listItem1);
  listItem1.appendChild(listItema1);
  ulItem.appendChild(listItem2);
  listItem2.appendChild(listItema2);

  return navDiv;
};

export default navPage;
