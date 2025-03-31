import './styles.css';
import homePageContent from './modules/homePage.js'

const pageContent = document.querySelector('#content')

function setPageContent(content) {
    pageContent.textContent = '';
    pageContent.append(content);
}

setPageContent(homePageContent);