const navPage = () => {

  const navDiv = document.createElement('div')
  navDiv.setAttribute('class', 'gold-tab')

  const navSecDiv = document.createElement('div')
  navSecDiv.setAttribute('class', 'gold-nav-div')
  const topNav = document.createElement('nav')
  topNav.setAttribute('class', 'goldtabs dark')
  const ulItem = document.createElement('ul')
  ulItem.setAttribute('id', 'horizontal-list')
  const listItem = document.createElement('li')
  const listItem_a = document.createElement('a')
  listItem_a.setAttribute('id', 'home')
  listItem_a.innerHTML = 'Home'
  const listItem1 = document.createElement('li')
  const listItem_a1 = document.createElement('a')
  listItem_a1.setAttribute('id', 'menu')
  listItem_a1.innerHTML = 'Menu'
  const listItem2 = document.createElement('li')
  const listItem_a2 = document.createElement('a')
  listItem_a2.setAttribute('id', 'contact-us')
  listItem_a2.innerHTML = 'Contact Us'

  navDiv.appendChild(navSecDiv)
  navSecDiv.appendChild(topNav)
  topNav.appendChild(ulItem)
  ulItem.appendChild(listItem)
  listItem.appendChild(listItem_a)
  ulItem.appendChild(listItem1)
  listItem1.appendChild(listItem_a1)
  ulItem.appendChild(listItem2)
  listItem2.appendChild(listItem_a2)

return navDiv

}

export default navPage
