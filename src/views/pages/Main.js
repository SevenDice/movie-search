import cards from "../../assets/cards.js";

let getTitleList = async () => {
  try {
    const titleList = cards[0];
    return titleList;

  } catch (err) {
    console.log('Error to get list of titles', err);
  }
}

let getImageList = async () => {
  try {
    const imagesList = cards[1];
    return imagesList;

  } catch (err) {
    console.log('Error to get list of images', err);
  }
}

let getLinkList = async () => {
  try {
    const linkList = cards[2];
    return linkList;

  } catch (err) {
    console.log('Error to get list of links', err);
  }
}

let Main = {
  render: async () => {
    let mainCardTitle = await getTitleList();
    let mainCardImage = await getImageList();
    let mainCardLink = await getLinkList();
    let view = '';
    for(let i = 0; i < mainCardTitle.length; i++) {
      view += /*html*/`
      <a href=${'/#' + mainCardLink[i]} class="main-card green">
      <img src=${"./assets" + mainCardImage[i]} alt="" srcset="">
      ${mainCardTitle[i]}
    </a>
      `
    }
    return view
  },
  after_render: async () => { }

}

export default Main;