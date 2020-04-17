import { getLinkList, getTitleList } from "../pages/Main";
import { gameMode } from "../../services/GameLogic"

const Sidenav = {
  render: async () => {
    const navigationItems = await getTitleList();
    const navigationLinks = await getLinkList();
    let view = '';

    view += /* html */ `
    <nav role="navigation">
          <div class="menuToggle">
            <input type="checkbox">
            <span></span>
            <span></span>
            <span></span>
            <!-- change to colored -->
            <ul class="menu green">
              <a href="/#/" class="header-item active">Main Page</a>
    `
    for (let i = 0; i < navigationItems.length; i += 1) {
      view += /* html */`
      <a href="/#${navigationLinks[i]}" class="header-item">${navigationItems[i]}</a>
      `
    }

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
        `
    return view
  },
  after_render: async () => {
    const container = document.getElementById('header_container');
    container.onclick = function (event) {
      if (event.target.className !== 'switch-handle') {
        return
      }
      const card = event.target.closest('.switch');
      const el = card.querySelector('#switcher');
      const buttonStart = document.getElementById('btn-start');
      const bgCards = document.querySelectorAll('#page_container>a');
      console.log(tes);

      if (el.checked === false) {
        el.checked = true;
       //buttonStart.classList.add('none');

        for (let i = 0; i < bgCards.length; i+=1) {
          
          bgCards[i].closest('a').classList.toggle('green');
       };

      } else {
        el.checked = false;
        //buttonStart.classList.remove('none');
        for (let i = 0; i < bgCards.length; i+=1) {
          bgCards[i].closest('a').classList.toggle('green');
        };
      }
      
   }

   
  
  }
}

export default Sidenav;