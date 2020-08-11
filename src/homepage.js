const mainImage = () => {

    const mainHomeDiv = document.createElement('div')
    mainHomeDiv.setAttribute('id', 'main')
    mainHomeDiv.setAttribute('class', 'hide-main')
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


 return mainHomeDiv

}

export default mainImage;
