const Main = {
  render: async () => {
    
    const view =  /* html */`
        <form action="" class="search">
          <input class="search-input" type="text" placeholder="Search movie" autofocus>
          <button class="search-btn" type="submit">Search</button>
          <span class="search-tia"></span>
        </form>
        <p class="info"></p>
        <div class="swiper-outer"></div>
      `
    return view
  },
  after_render: async () => {

  },
};

export default Main;
