function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const navElem = document.createElement('nav');
    links.forEach(link => {
      const aTag = document.createElement('a');
      aTag.href = link.href;
      aTag.textContent = link.textContent;
      aTag.title = link.title;
      navElem.appendChild(aTag);
    });
    return navElem
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement('div');
    card.classList.add('learner-card');

    const namePara = document.createElement('p');
    namePara.textContent = learner.fullName;

    const idPara = document.createElement('p');
    idPara.textContent = `Learner ID: ${learner.id}`;

    const dobPara = document.createElement('p');
    dobPara.textContent = `Date of Birth: ${learner.dateOfBirth}`;

    const favoriteLanguage = languages.find(language => 
      language.id === learner.favLanguage
    )
    const favLangPara = document.createElement('p');
    favLangPara.textContent = `Favorite Language: ${favoriteLanguage.name}`;

    card.appendChild(namePara);
    card.appendChild(idPara);
    card.appendChild(dobPara);
    card.appendChild(favLangPara);

    card.addEventListener('click', () => {
     document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active');
      })
      card.classList.add('active')
    })

    return card;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    const section = document.querySelector('section');
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages);
      section.appendChild(learnerCard);
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footerElem = document.createElement('footer');

    const companyInfo = document.createElement('div');
    companyInfo.classList.add('company-info');

    const namePara = document.createElement('p');
    namePara.classList.add('company-name');
    namePara.textContent = footerData.companyName;

    const addressPara = document.createElement('p');
    addressPara.classList.add('address');
    addressPara.textContent = footerData.address;

    const emailPara = document.createElement('p');
    emailPara.classList.add('contact-email');
    emailPara.textContent = 'Email: '

    const a = document.createElement('a');
    a.href = `mailto:${footerData.contactEmail}`;
    a.textContent = footerData.contactEmail;
    
    emailPara.appendChild(a);

    companyInfo.appendChild(namePara);
    companyInfo.appendChild(addressPara);
    companyInfo.appendChild(emailPara);
    footerElem.appendChild(companyInfo);

    const socialMedia = document.createElement('div');
    socialMedia.classList.add('social-media');

    const twitter = document.createElement('a');
    twitter.href = footerData.socialMedia.twitter;
    twitter.textContent = 'Twitter'

    const facebook = document.createElement('a');
    facebook.href = footerData.socialMedia.facebook;
    facebook.textContent = 'Facebook';

    const instagram = document.createElement('a');
    instagram.href = footerData.socialMedia.instagram;
    instagram.textContent = 'Instagram';

    socialMedia.appendChild(twitter);
    socialMedia.appendChild(facebook);
    socialMedia.appendChild(instagram);
    footerElem.appendChild(socialMedia);

    const copyRight = document.createElement('div');
    copyRight.textContent = `© ${footerData.companyName.toUpperCase()} ${new Date().getFullYear()}`;
    footerElem.appendChild(copyRight);

    return footerElem;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  const section = document.querySelector('section')
  section.addEventListener('click', (e) => {
    if (e.target === section) {
      document.querySelectorAll('.learner-card').forEach(card => card.classList.remove('active'));
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
