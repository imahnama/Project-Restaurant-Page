const menuPage = () => {
  const mainMenuDiv = document.createElement('div')
  mainMenuDiv.setAttribute('class', 'hide-menu')
  mainMenuDiv.setAttribute('id', 'main-menu-div')

  const menu = document.createElement('div')
  menu.setAttribute('id', 'main-menu')

  mainMenuDiv.appendChild(menu)

  const menuHeader = document.createElement('h2')
  menuHeader.innerHTML = 'Our Menu'

  menu.appendChild(menuHeader)

  const menuDishes = document.createElement('div')
  menuDishes.setAttribute('class', 'menu-dish, d-flex, flex-column')

  mainMenuDiv.appendChild(menuDishes)

  const menuItems = document.createElement('div')
  menuItems.setAttribute('class', 'menu-items')
  const img = document.createElement('img')
  img.setAttribute('class', 'chapo')
  img.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg'

  const img1 = document.createElement('img')
  img1.setAttribute('class', 'chapo')
  img1.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg'

  const img2 = document.createElement('img')
  img2.setAttribute('class', 'chapo')
  img2.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg'

  const menuItems1 = document.createElement('div')
  menuItems1.setAttribute('class', 'menu-items')
  const img3 = document.createElement('img')
  img3.setAttribute('class', 'chapo')
  img3.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg'

  const img4 = document.createElement('img')
  img4.setAttribute('class', 'chapo')
  img4.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg'

  const img5 = document.createElement('img')
  img5.setAttribute('class', 'chapo')
  img5.src = 'https://img-global.cpcdn.com/recipes/30813288c94f72bf/1200x630cq70/photo.jpg'


  menuDishes.appendChild(menuItems)
  menuDishes.appendChild(menuItems1)
  menuItems.appendChild(img)
  menuItems.appendChild(img1)
  menuItems.appendChild(img2)
  menuItems.appendChild(img3)
  menuItems.appendChild(img4)
  menuItems.appendChild(img5)

  return mainMenuDiv
}

document.body.appendChild(menuPage())

export default menuPage;
