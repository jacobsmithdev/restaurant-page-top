const homePage = document.createElement('div');
homePage.classList.add('home-page-wrapper');

const hero = createHeroElement();
homePage.append(hero);

function createHeroElement() {
    const hero = document.createElement('div');

    const body = document.createElement('div');
    const header = document.createElement('div');
    const text = document.createElement('p');

    const buttonsContainer = document.createElement('div');
    const orderButton = document.createElement('div'); 
    const menuButton = document.createElement('div');
    const locationButton = document.createElement('div');

    const heroImg = document.createElement('div');

    hero.classList.add('hero');
    body.classList.add('hero__body');
    header.classList.add('hero__header');
    
    buttonsContainer.classList.add('hero__buttons');
    orderButton.classList.add('button');    
    menuButton.classList.add('button');    
    locationButton.classList.add('button');    

    heroImg.classList.add('hero__img');

    header.textContent = 'Every kind of soup.'
    text.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, nemo. Soluta nostrum, quia, a quos unde '

    locationButton.textContent = 'Find A Location';
    orderButton.textContent = 'Order Online';
    menuButton.textContent = 'Full Menu';

    buttonsContainer.append(locationButton, orderButton, menuButton)
    body.append(header, text, buttonsContainer);
    hero.append(body, heroImg);
    return hero;
}

export default homePage;