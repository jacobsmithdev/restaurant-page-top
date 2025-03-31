import './styles.css';
import homePageContent from './modules/homePage.js'
import menuPageContent from './modules/menuPage.js';
import aboutPageContent from './modules/aboutPage.js';

const pageContent = document.querySelector('#content')

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

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

aboutBtn.addEventListener('click', () => {
    setPageContent(aboutPageContent);
});

setPageContent(homePageContent);