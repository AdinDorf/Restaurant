import { createAbout } from "./modules/about";
import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createNavBar } from "./modules/nav";
import "./styles.css";
const baseNode = document.getElementById("base");
const contentNode = document.getElementById("content");
// const homeButton = document.getElementById("homeButton");
// const menuutton = document.getElementById("menuButton");
// const aboutButton = document.getElementById("aboutButton");

createNavBar(baseNode);
createHome(contentNode);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        clearChildren(contentNode);   
        switch (button.id) {
            case "homeButton":
                console.log("Create Home");
                createHome(contentNode);
                break;
            case "menuButton":
                createMenu(contentNode);
                console.log("Create Menu");
                break;
            case "aboutButton":
                createAbout(contentNode);
                console.log("Create About");
                break;
        }
    });
});



function clearChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}