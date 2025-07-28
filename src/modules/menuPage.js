import './menuPage.css';

const menuOptions = ["Specials", "Meals", "Breads", "Sides", "Drinks"];

function createMenuElement() {
    const menu = document.createElement('div');

    const header = document.createElement('h1');
    const headerOuterBorder = document.createElement('div');
    const headerInnerBorder = document.createElement('div');

    const foodList = document.createElement('ul')
    const foodListWrapper = document.createElement('div');

    menu.classList.add('menu');

    header.classList.add('menu__header');
    headerOuterBorder.classList.add('framed-border__outer')
    headerInnerBorder.classList.add('framed-border__inner')

    foodListWrapper.classList.add('framed-border__outer')

    foodList.classList.add('menu-list');
    
    header.textContent = 'Menu';

    foodListWrapper.append(foodList);
    headerInnerBorder.append(header);
    headerOuterBorder.append(headerInnerBorder);

    menuOptions.forEach(option => {
        const item = document.createElement('li')
        item.classList.add('menu-list__item');
        item.textContent = option;
        foodList.append(item);
    })

    menu.append(headerOuterBorder, foodListWrapper);

    return menu;
}

const menuPage = createMenuElement();

export default menuPage;