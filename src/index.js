import { createHome } from "./modules/home";
import { createNavBar } from "./modules/nav";
import "./styles.css";
const baseNode = document.getElementById("content");
const homeButton = document.getElementById("homeButton");
const menuutton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");

createNavBar(baseNode);

createHome(baseNode);