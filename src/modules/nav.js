export function createNavBar(baseNode) {

    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    const logo = document.createElement("img");
    //add image src
    const navButtons = document.createElement("div");
    const homeButton = document.createElement("button")
    homeButton.setAttribute("id", "homeButton");
    homeButton.textContent = "Home";
    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "menuButton");
    menuButton.textContent = "Menu";
    const aboutButton = document.createElement("button");
    aboutButton.setAttribute("id", "aboutButton");
    aboutButton.textContent = "About Us";

    baseNode.appendChild(navbar);
    navbar.appendChild(logo);
    navbar.appendChild(navButtons);
    navButtons.appendChild(homeButton);
    navButtons.appendChild(menuButton);
    navButtons.appendChild(aboutButton);

}