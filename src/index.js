import printScreen from './print.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css'
import hImage from './headerCrop.jpg'

const headerImage = new Image();
headerImage.src = hImage;
document.body.appendChild(headerImage);

const tabs = document.createElement('nav');

const mainPage = document.createElement('div');
mainPage.addEventListener('click', () => {
    printScreen();
})
mainPage.innerHTML = "Main";
tabs.appendChild(mainPage);

const menuPage = document.createElement('div');
menuPage.addEventListener('click', () => {
    menu();
})
menuPage.innerHTML = "Menu"
tabs.appendChild(menuPage);

const contactPage = document.createElement('div');
contactPage.addEventListener('click', () => {
    contact();
})
contactPage.innerHTML = "Contact"
tabs.appendChild(contactPage);

document.body.appendChild(tabs);
