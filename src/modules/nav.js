export function createNavBar() {
    const contentNode = document.getElementById("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const logo = document.createElement("img");
    //add image src
    const navButtons = document.createElement("div");
    const homeButton = document.createElement("button")
    homeButton.classList.add("home");
    homeButton.textContent = "Home";
    const menuButton = document.createElement("button");
    menuButton.classList.add("menu");
    menuButton.textContent = "Menu";
    const aboutButton = document.createElement("button");
    aboutButton.classList.add("about");
    aboutButton.textContent = "About Us";

    contentNode.appendChild(navbar);
    navbar.appendChild(logo);
    navbar.appendChild(navButtons);
    navButtons.appendChild(homeButton);
    navButtons.appendChild(menuButton);
    navButtons.appendChild(aboutButton);

}