import './homePage.css';

const homePage = document.createElement('div');
homePage.classList.add('home-page-wrapper');

const hero = createHeroElement();
homePage.append(hero);

function createHeroElement() {
    const heroWrapper = document.createElement('div');
    const heroOuterBorder = document.createElement('div');
    const heroInnerBorder = document.createElement('div');

    const hero = document.createElement('div');
    const heroHeader = document.createElement('h1');
    const heroSubtext = document.createElement('p');

    const btnsWrapper = document.createElement('div');
    const heroOrderBtn = document.createElement('button');
    const heroLocationBtn = document.createElement('button');
    const heroMenuBtn = document.createElement('button');

    heroWrapper.classList.add('hero-wrapper');
    heroOuterBorder.classList.add('framed-border__outer');
    heroInnerBorder.classList.add('framed-border__inner');

    hero.classList.add('hero')
    heroHeader.classList.add('hero__header');
    heroSubtext.classList.add('hero__subtext');

    btnsWrapper.classList.add('hero__buttons-wrapper');
    heroOrderBtn.classList.add('button', 'hero__button');
    heroLocationBtn.classList.add('button', 'hero__button');
    heroMenuBtn.classList.add('button', 'hero__button');

    heroHeader.textContent = 'Every kind of soup.';
    heroSubtext.textContent = 'Lorem ipsum dolor sit amet consectetur elit.';
    heroOrderBtn.textContent = 'Order Online';
    heroLocationBtn.textContent = 'Locations';
    heroMenuBtn.textContent = 'Menu';

    btnsWrapper.append(
        heroOrderBtn, 
        heroLocationBtn, 
        heroMenuBtn
    )

    hero.append(
        heroHeader, 
        heroSubtext, 
        btnsWrapper,
    );

    heroInnerBorder.append(hero);
    heroOuterBorder.append(heroInnerBorder);
    heroWrapper.append(heroOuterBorder);

    return heroWrapper;
}

export default homePage;