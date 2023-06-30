import hImage from './headerCrop.jpg'


export default function printScreen() {
    const element = document.createElement('div');

    const headerImage = new Image();
    headerImage.src = hImage;
    element.appendChild(headerImage);

    const header = document.createElement('h2');
    const headerText = document.createTextNode("Tastee Boigahs");
    header.appendChild(headerText);
    element.appendChild(header);

    const promo = document.createElement('p');
    const promoText = document.createTextNode("Yum yum yum yum")
    promo.appendChild(promoText);
    element.appendChild(promo);

    document.body.appendChild(element);
}