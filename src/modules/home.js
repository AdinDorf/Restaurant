export function createHome (baseNode) {
    const home = document.createElement("div");
    home.classList.add("home");
    const splash = document.createElement("img");
    
    const header = document.createElement("h1");
    const text = document.createElement("p");
    text.textContent = "Welcome to my coffee shop! This is a blurb.";

    baseNode.appendChild(home);
    home.appendChild(splash);
    home.appendChild(header);
    home.appendChild(text);
}