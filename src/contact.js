export default function printContact() {
    const contactDisplay = document.createElement("div");

    const location = document.createElement("p");
    const locationText = document.createTextNode("4321 N. South St");
    location.appendChild(locationText);
    contactDisplay.appendChild(location);

    const phone = document.createElement("p");
    const phoneText = document.createTextNode("555-444-3210");
    phone.appendChild(phoneText);
    contactDisplay.appendChild(phone);

    const content = document.getElementById('content');
    content.appendChild(contactDisplay);
}