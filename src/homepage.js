const mainImage = () => {

    const mainHomeDiv = document.createElement('div')
    mainHomeDiv.setAttribute('id', 'main')
    const divMainImage = document.createElement('div')
    divMainImage.setAttribute('id', 'homepage')

    mainHomeDiv.appendChild(divMainImage)
    const img = document.createElement('img')
    img.src = 'http://owl.jwsthemeswp.com/wp-content/uploads/2017/05/slider3.jpg';

    divMainImage.appendChild(img)

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'page-content')

    mainHomeDiv.appendChild(newDiv)
    const divContent =  document.createElement('p')
    divContent.innerHTML = `We have a proper <span class = "red-text">passion</span> for cooking. <span class = "red-text"> Love </span>is the <span class="red-text">secret ingeredient</span> that makes all our meal taste <span class="red-text"> better </span> and <span class="red-text">magical.</span>`
    newDiv.appendChild(divContent)


    const navDiv = document.createElement('div')
    navDiv.setAttribute('class', 'gold-tab')

    mainHomeDiv.appendChild(navDiv)

    const navSecDiv = document.createElement('div')
    navSecDiv.setAttribute('class', 'gold-nav-div')
    const topNav = document.createElement('nav')
    topNav.setAttribute('class', 'goldtabs dark')
    const ulItem = document.createElement('ul')
    ulItem.setAttribute('id', 'horizontal-list')
    const listItem = document.createElement('li')
    const liItem_a = document.createElement('a')
    liItem_a.innerHTML = 'Home'
    const listItem1 = document.createElement('li')
    const liItem_a1 = document.createElement('a')
    liItem_a1.innerHTML = 'Menu'
    const listItem2 = document.createElement('li')
    const liItem_a2 = document.createElement('a')
    liItem_a2.innerHTML = 'Contact Us'


    navDiv.appendChild(navSecDiv)
    navSecDiv.appendChild(topNav)
    topNav.appendChild(ulItem)
    ulItem.appendChild(listItem)
    listItem.appendChild(liItem_a)
    ulItem.appendChild(listItem1)
    listItem1.appendChild(liItem_a1)
    ulItem.appendChild(listItem2)
    listItem2.appendChild(liItem_a2)


 return mainHomeDiv

}

document.body.appendChild(mainImage())

export default homepage;
