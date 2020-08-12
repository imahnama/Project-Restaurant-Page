const contactPage = () => {
  const mainContactDiv = document.createElement('div');
  mainContactDiv.setAttribute('id', 'main-contact-div');

  const contact = document.createElement('div');
  contact.setAttribute('id', 'main-contact');

  mainContactDiv.appendChild(contact);

  const contactHeader = document.createElement('h2');
  contactHeader.innerHTML = 'Contact Us';

  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('class', 'feedback');

  mainContactDiv.appendChild(contactDiv);

  const contactDivContent = document.createElement('div');
  contactDivContent.setAttribute('class', 'customer-feedback');

  contactDiv.appendChild(contactDivContent);
  const headText = document.createElement('h3');
  headText.setAttribute('class', 'pt-5');
  headText.innerHTML = 'We’d Love to hear from you';

  const paragraphOne = document.createElement('p');
  paragraphOne.setAttribute('class', 'pt-3');
  paragraphOne.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

  const paragraphTwo = document.createElement('p');
  paragraphTwo.innerHTML = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.';

  const contactFormDiv = document.createElement('div');
  contactFormDiv.setAttribute('class', 'div-form');
  const contactForm = document.createElement('form');
  contactForm.setAttribute('class', 'pt-3');
  contactFormDiv.appendChild(contactForm);

  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'form-group');

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('class', 'nameTxt');
  nameDiv.appendChild(nameLabel);
  nameLabel.innerHTML = 'Name';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('class', 'nameText');
  nameInput.type = 'text';
  nameDiv.appendChild(nameInput);

  contactForm.appendChild(nameDiv);

  const nameDiv1 = document.createElement('div');
  nameDiv1.setAttribute('class', 'form-group');

  const nameLabel1 = document.createElement('label');
  nameDiv1.appendChild(nameLabel1);
  nameLabel1.innerHTML = 'Email';

  const nameInput1 = document.createElement('input');
  nameInput1.setAttribute('class', 'nameText');
  nameInput1.type = 'email';
  nameDiv1.appendChild(nameInput1);

  contactForm.appendChild(nameDiv1);

  const nameDiv2 = document.createElement('div');
  nameDiv2.setAttribute('class', 'form-group');

  const nameLabel2 = document.createElement('label');
  nameDiv2.appendChild(nameLabel2);
  nameLabel2.innerHTML = 'Message';

  const nameInput2 = document.createElement('input');
  nameInput2.setAttribute('id', 'message-content');
  nameInput2.type = 'text';
  nameDiv2.appendChild(nameInput2);

  contactForm.appendChild(nameDiv2);

  const nameDiv3 = document.createElement('div');
  nameDiv3.setAttribute('class', 'form-group');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('class', 'btn-primary');
  submitBtn.innerHTML = 'Submit';

  nameDiv3.appendChild(submitBtn);

  contactForm.appendChild(nameDiv3);

  contact.appendChild(contactHeader);
  contactDiv.appendChild(contactDivContent);
  contactDiv.appendChild(contactFormDiv);
  contactDivContent.appendChild(headText);
  contactDivContent.appendChild(paragraphOne);
  contactDivContent.appendChild(paragraphTwo);

  return mainContactDiv;
};

export default contactPage;
