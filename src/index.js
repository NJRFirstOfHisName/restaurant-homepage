import printScreen from './print.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css'
import hImage from './headerCrop.jpg'

const headerImage = new Image();
headerImage.src = hImage;
document.body.appendChild(headerImage);

printScreen();
menu();
contact();