import { getLinkList, getTitleList } from "../pages/Main";
import { gameModeCheck } from "../../services/GameFunctions";
import { gameEnv } from "../../services/Variables";
import Utils from "../../services/Utils";

const Sidenav = {
  render: async () => {
    const navigationItems = await getTitleList();
    const navigationLinks = await getLinkList();
    let view = "";

    if (gameEnv.gameMode === true) {
      view += /* html */ `
      <nav role="navigation">
            <div class="menuToggle">
              <input type="checkbox">
              <span></span>
              <span></span>
              <span></span>
              <!-- change to colored -->
              <ul class="menu">
                <a href="/#/" class="header-item">Main Page</a>
      `;
    } else {
      view += /* html */ `
      <nav role="navigation">
            <div class="menuToggle">
              <input type="checkbox">
              <span></span>
              <span></span>
              <span></span>
              <!-- change to colored -->
              <ul class="menu green">
                <a href="/#/" class="header-item">Main Page</a>
      `;
    }
    for (let i = 0; i < navigationItems.length; i += 1) {
      view += /* html */ `
      <a href="/#${navigationLinks[i]}" class="header-item">${navigationItems[i]}</a>
      `;
    }
    if (gameEnv.gameMode === false) {
      view += /* html */ `
              </ul>
              </div>
            </nav>
            <div class="switch-container">
              <label for="" class="switch">
                <input id="switcher" type="checkbox" class="switch-input" checked>
                <span class="switch-label" data-on="Train" data-off="Play"></span>
                <span class="switch-handle"></span>
              </label>
            </div>
          `;
    } else {
      view += /* html */ `
              </ul>
              </div>
            </nav>
            <div class="switch-container">
              <label for="" class="switch">
                <input id="switcher" type="checkbox" class="switch-input">
                <span class="switch-label" data-on="Train" data-off="Play"></span>
                <span class="switch-handle"></span>
              </label>
            </div>
          `;
    }
    return view;
  },
  after_render: async () => {
    const req = Utils.parseRequestURL();
    const pageURL =
      (req.resource ? `/#/${req.resource}` : "/#/") +
      (req.id ? "/:id" : "") +
      (req.verb ? `/${req.verb}` : "");

    const navItemsCollection = document.querySelectorAll('.header-item')

    for(let i = 0; i < navItemsCollection.length; i += 1) {
      if (navItemsCollection[i].getAttribute('href') === pageURL) {
        navItemsCollection[i].classList.toggle('active')
      }
    }
    
    gameModeCheck();
  },
};

export default Sidenav;
