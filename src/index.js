import './styles.css';

const pageContent = document.querySelector('#content')

function setPageContent(content) {
    pageContent.textContent = '';
    pageContent.append(content);
}