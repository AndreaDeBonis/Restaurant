import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const page = (() => {
  /* home(); */
  document.getElementById("home").addEventListener("click", home);
  document.getElementById("menu").addEventListener("click", menu);
  document.getElementById("about").addEventListener("click", about);
})();
