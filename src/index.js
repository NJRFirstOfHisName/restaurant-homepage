import printHome from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css'
import hImage from './headerCrop.jpg'

const header = document.createElement('div');
header.className = "header";
document.body.appendChild(header);

const headerImage = new Image();
headerImage.src = hImage;
header.appendChild(headerImage);

const tabs = document.createElement('nav');
const content = document.createElement('div');
content.id = "content";

const mainPage = document.createElement('div');
mainPage.addEventListener('click', () => {
    content.innerHTML = "";
    printHome();
})
mainPage.innerHTML = "Main";
tabs.appendChild(mainPage);

const menuPage = document.createElement('div');
menuPage.addEventListener('click', () => {
    content.innerHTML = "";
    menu();
})
menuPage.innerHTML = "Menu"
tabs.appendChild(menuPage);

const contactPage = document.createElement('div');
contactPage.addEventListener('click', () => {
    content.innerHTML = "";
    contact();
})
contactPage.innerHTML = "Contact"
tabs.appendChild(contactPage);

header.appendChild(tabs);

document.body.appendChild(content);