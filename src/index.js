import './styles.css';
import homePageContent from './modules/homePage.js'
import menuPageContent from './modules/menuPage.js';
import aboutPageContent from './modules/aboutPage.js';

const pageContent = document.querySelector('#content')

const headerBtnsContainer = document.querySelector('.header__nav');

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

function setPageContent(content) {
    pageContent.textContent = '';
    pageContent.append(content);
}

function setHeaderBtnFocus(targetBtn) {
    const headerBtns = Array.from(headerBtnsContainer.children);
    headerBtns.forEach(btn => btn.classList.remove('button--header--selected'))
    targetBtn.classList.add('button--header--selected');
}

homeBtn.addEventListener('click', () => {
    setPageContent(homePageContent);
    setHeaderBtnFocus(homeBtn);
});

menuBtn.addEventListener('click', () => {
    setPageContent(menuPageContent);
    setHeaderBtnFocus(menuBtn);
});

aboutBtn.addEventListener('click', () => {
    setPageContent(aboutPageContent);
    setHeaderBtnFocus(aboutBtn);
});

setPageContent(homePageContent);
setHeaderBtnFocus(homeBtn);
