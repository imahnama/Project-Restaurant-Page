const contactPage = () => {

  const mainContactDiv = document.createElement('div')
  mainContactDiv.setAttribute('id', 'main-contact-div')

  const contact = document.createElement('div')
  contact.setAttribute('id', 'main-contact')

  mainContactDiv.appendChild(contact)

  const contactHeader = document.createElement('h2')
  contactHeader.innerHTML = 'Contact Us'

  const contactDiv = document.createElement('div')
  contactDiv.setAttribute('class', 'feedback')

  mainContactDiv.appendChild(contactDiv)

  const contactDivContent = document.createElement('div')
  contactDivContent.setAttribute('class', 'customer-feedback')

  contactDiv.appendChild(contactDivContent)
  const headText = document.createElement('h3')
  headText.setAttribute('class', 'pt-5')
  headText.innerHTML = 'We’d Love to hear from you'

  const paragraphOne = document.createElement('p')
  paragraphOne.setAttribute('class', 'pt-3')
  paragraphOne.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

  const paragraphTwo = document.createElement('p')
  paragraphTwo.innerHTML = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'

  const contactFormDiv = document.createElement('div')
  contactFormDiv.setAttribute('class', 'div-form')
  const contactForm = document.createElement('form')
  contactForm.setAttribute('class', 'pt-3')
  contactFormDiv.appendChild(contactForm)

  const formHtml = `
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" placeholder="Enter Name">
      </div>
      <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" placeholder="Enter Email" class = "email">
      </div>
      <div class="form-group">
        <label for="message" class="message">Message:</label>
        <textarea name="message" id="" cols="50" rows="7"></textarea>
      </div>
      <div class="form-group">
      <button class="btn btn-primary ">
            Submit
          </button>
      </div>
  `

  contactForm.innerHTML = formHtml



  contact.appendChild(contactHeader)
  contactDiv.appendChild(contactDivContent)
  contactDiv.appendChild(contactFormDiv)
  contactDivContent.appendChild(headText)
  contactDivContent.appendChild(paragraphOne)
  contactDivContent.appendChild(paragraphTwo)

  return mainContactDiv;
}

document.body.appendChild(contactPage())

export default contactPage
