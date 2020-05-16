import { getMovieData, search } from "../../services/CreateCard";
import Keyboard from "../../services/Keyboard";

const Main = {
  render: async () => {
    const view = /* html */ `
        <form action="" class="search">
          <input type="search" class="use-keyboard-input search-input" type="text" placeholder="Search movie" autofocus>
          <button id="submit-btn" class="search-btn" type="submit">Search</button>
          <span id="virtual-keyboard" class="search-tia"></span>
        </form>
        <p class="info"></p>
      <div class="swiper-outer">
        <div class="swiper-container swiper-initialized swiper-container-horizontal">
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
        <span class="swiper-notification"></span>
        </div>
        <div class="swiper-btn swiper-btn-next" tabindex="0" role="button" aria-label="Next slide"></div>
        <div class="swiper-btn swiper-btn-prev" tabindex="0" role="button" aria-label="Previous slide"></div>
      </div>
      `;
    return view;
  },
  after_render: async () => {
    const searchForm = document.querySelector("form.search");
    const toggleKeyboard = document.getElementById('virtual-keyboard');

    getMovieData("home");

    Keyboard.init();
    toggleKeyboard.addEventListener('click', () => {
      document.getElementById('keyboard_container').classList.toggle('keyboard--hidden');
    })

    searchForm.addEventListener("submit", (event) => {
      search();
      event.preventDefault();
    });
    
  },
};

export default Main;
