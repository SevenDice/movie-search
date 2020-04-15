import { getLinkList, getTitleList } from "../pages/Main";

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
              <input type="checkbox" class="switch-input" checked>
              <span class="switch-label" data-on="Train" data-off="Play"></span>
              <span class="switch-handle"></span>
            </label>
          </div>
        `
    return view
  },
  after_render: async () => { }

}

export default Sidenav;