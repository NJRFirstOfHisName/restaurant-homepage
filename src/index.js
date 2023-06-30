import print from './print.js';
import './style.css'
import hImage from './headerCrop.jpg'

function component() {
    const element = document.createElement('div');

    const headerImage = new Image();
    headerImage.src = hImage;
    element.appendChild(headerImage);

    const headerText = document.createElement("p");

    return element;
}

document.body.appendChild(component());