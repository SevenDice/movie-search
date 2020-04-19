import "./assets/style.css";

import Main from "./views/pages/Main";
import ActionSetA from "./views/pages/ActionSetA";
import ActionSetB from "./views/pages/ActionSetB";
import AnimalSetA from "./views/pages/AnimalSetA";
import AnimalSetB from "./views/pages/AnimalSetB";
import Clothes from "./views/pages/Clothes";
import Emotions from "./views/pages/Emotions";
import Fruits from "./views/pages/Fruits";
import Vegetables from "./views/pages/Vegetables";
import Error404 from "./views/pages/Error404";

import Sidenav from "./views/components/Sidenav";

import Utils from "./services/Utils";

// List of supported routes
const routes = {
  "/": Main,
  "/action_set-a": ActionSetA,
  "/action_set-b": ActionSetB,
  "/animal_set-a": AnimalSetA,
  "/animal_set-b": AnimalSetB,
  "/clothes": Clothes,
  "/emotions": Emotions,
  "/fruits": Fruits,
  "/vegetables": Vegetables,
};

const router = async () => {
  // Load view element:
  const header = null || document.getElementById("header_container");
  const content = null || document.getElementById("page_container");

  // Render the Header of the page
  header.innerHTML = await Sidenav.render();
  await Sidenav.after_render();

  // Get the parsed URl from the addressbar
  const request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  const parsedURL =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
