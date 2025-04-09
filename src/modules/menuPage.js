
const menuOptions = ["Specials", "Meals", "Breads", "Sides", "Drinks"];

function createMenuElement() {
    const menu = document.createElement('div');
    const header = document.createElement('h1');
    const foodList = document.createElement('ul')

    menu.classList.add('menu');
    header.classList.add('menu__header');
    foodList.classList.add('menu-list');
    
    header.textContent = 'Menu';

    menuOptions.forEach(option => {
        const item = document.createElement('li')
        item.classList.add('menu-list__item');
        item.textContent = option;
        foodList.append(item);
    })

    menu.append(header, foodList);

    return menu;
}

const menuPage = createMenuElement();

export default menuPage;