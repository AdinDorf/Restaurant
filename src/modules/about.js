export function createAbout (baseNode) {
    const about = document.createElement("div");
    about.classList.add("about");
    const splash = document.createElement("img");
    
    const header = document.createElement("h1");
    const text = document.createElement("p");
    text.textContent = "This is the about page!";

    baseNode.appendChild(about);
    about.appendChild(splash);
    about.appendChild(header);
    about.appendChild(text);
}