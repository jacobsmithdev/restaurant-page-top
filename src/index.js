import './styles.css';
import homePageContent from './modules/homePage.js'

const pageContent = document.querySelector('#content')

const homeBtn = document.querySelector('#home');

function setPageContent(content) {
    pageContent.textContent = '';
    pageContent.append(content);
}

homeBtn.addEventListener('click', () => {
    setPageContent(homePageContent);
});

setPageContent(homePageContent);