export function createMenu (baseNode) {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const splash = document.createElement("img");
    
    const header = document.createElement("h1");
    const text = document.createElement("p");
    text.textContent = "Here is the menu for my coffee shop";

    baseNode.appendChild(menu);
    menu.appendChild(splash);
    menu.appendChild(header);
    menu.appendChild(text);
}