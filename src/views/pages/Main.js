import swiper from 'swiper'

const Main = {
  render: async () => {
    
    const view =  /* html */`
        <form action="" class="search">
          <input class="search-input" type="text" placeholder="Search movie" autofocus>
          <button class="search-btn" type="submit">Search</button>
          <span class="search-tia"></span>
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
      `
    return view
  },
  after_render: async () => {

  },
};

export default Main;
