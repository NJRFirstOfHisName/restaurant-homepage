export default function printScreen() {
    const element = document.createElement('div');

    const header = document.createElement('h2');
    const headerText = document.createTextNode("Tastee Boigahs");
    header.appendChild(headerText);
    element.appendChild(header);

    const promo = document.createElement('p');
    const promoText = document.createTextNode("Tastee Boigahs for you. Tastee Boigahs for me. Come have a Tastee Boigah. Give your mouth a treat")
    promo.appendChild(promoText);
    element.appendChild(promo);

    document.body.appendChild(element);
}