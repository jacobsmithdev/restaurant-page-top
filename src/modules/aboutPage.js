import './aboutPage.css';

const aboutListItems = [
    "Contact", 
    "Privacy Policy", 
    "Copyright info", 
    "See all locations", 
    "Hiring"
];

const aboutTextContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, velit est voluptate voluptatibus alias aut! Quasi, natus. Assumenda, repellendus aspernatur. Nam sequi corporis distinctio molestias voluptatibus vero incidunt repudiandae deleniti!"

function createMenuElement() {
    const about = document.createElement('div');
    const header = document.createElement('h1');
    const aboutText = document.createElement('p');
    const aboutList = document.createElement('ul');

    about.classList.add('about');
    header.classList.add('about__header');
    aboutList.classList.add('about__list');
    
    header.textContent = 'About';
    aboutText.textContent = aboutTextContent;

    aboutListItems.forEach(option => {
        const item = document.createElement('li')
        const link = document.createElement('a');

        item.classList.add('about__list-item');
        link.classList.add('about__list-link')

        link.textContent = option;

        link.setAttribute('href', '#');
        
        item.append(link);
        aboutList.append(item);
    })

    about.append(header, aboutText, aboutList);

    return about;
}

const aboutPage = createMenuElement();

export default aboutPage;