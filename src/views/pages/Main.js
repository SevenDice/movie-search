let Main = {
  render: async () => {
    let view = /*html*/ `
        <a href="#/cards" class="main-card green">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        <a href="#/cards" class="main-card">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        <a href="#/cards" class="main-card">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        <a href="#/cards" class="main-card">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        <a href="#/cards" class="main-card">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        <a href="#/cards" class="main-card">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        <a href="#/cards" class="main-card">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        <a href="#/cards" class="main-card">
          <img src="./assets/img/angry.jpg" alt="" srcset="">
          Action (set A)
        </a>
        `
    return view
  },
  after_render: async () => { }

}

export default Main;