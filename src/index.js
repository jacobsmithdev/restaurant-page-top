import './styles.css';
import homePageContent from './modules/homePage.js'
import menuPageContent from './modules/menuPage.js';

const pageContent = document.querySelector('#content')

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');

function setPageContent(content) {
    pageContent.textContent = '';
    pageContent.append(content);
}

homeBtn.addEventListener('click', () => {
    setPageContent(homePageContent);
});

menuBtn.addEventListener('click', () => {
    setPageContent(menuPageContent);
});

setPageContent(homePageContent);