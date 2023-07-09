export default function printMenu() {
  const Menu = [
    {
      Name: "Boigah",
      Cost: "$14",
    },
    {
      Name: "Fries",
      Cost: "$5",
    },
    {
      Name: "Milkshake",
      Cost: "$4",
    },
  ];

  const menuDisplay = document.createElement("ul");

  Menu.forEach((item) => {
    const menuItem = document.createElement("li");
    const itemText = document.createTextNode(item.Name);
    menuItem.appendChild(itemText);
    menuDisplay.appendChild(menuItem);

    const menuCost = document.createElement("li");
    const costText = document.createTextNode(item.Cost);
    menuCost.appendChild(costText);
    menuDisplay.appendChild(menuCost);
  });

  const content = document.getElementById("content");
  content.appendChild(menuDisplay);
}
