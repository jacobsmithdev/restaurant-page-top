const homePage = document.createElement('div');
homePage.classList.add('home-page-wrapper');

const hero = createHeroElement();
const menu = createMenuElement();
homePage.append(hero, menu);

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

function createMenuElement() {
    const menu = document.createElement('div');

    const specialsCard = document.createElement('a');
    const soupCard = document.createElement('a');
    const breadCard = document.createElement('a');

    const specialsText = document.createElement('div');
    const soupsText = document.createElement('div');
    const breadsText = document.createElement('div');

    menu.classList.add('menu-preview');

    specialsCard.classList.add('menu-card', 'menu-card--red');
    soupCard.classList.add('menu-card');
    breadCard.classList.add('menu-card', 'menu-card--green');
    
    specialsText.classList.add('menu-card__text');
    soupsText.classList.add('menu-card__text');
    breadsText.classList.add('menu-card__text');
    
    specialsText.textContent = 'Specials';
    soupsText.textContent = 'Soups';
    breadsText.textContent = 'Breads';

    specialsCard.setAttribute('href', '#');
    soupCard.setAttribute('href', '#');
    breadCard.setAttribute('href', '#');

    specialsCard.append(specialsText);
    soupCard.append(soupsText);
    breadCard.append(breadsText);

    menu.append(specialsCard, soupCard, breadCard);

    return menu;
}

export default homePage;