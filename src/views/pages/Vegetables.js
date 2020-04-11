import cards from "../../assets/cards.js";

let getCards = async () => {
  try {
    const cardsData = cards[9];
    return cardsData;
  }

  catch (err) {
    console.log('Error to get cards data', err);
  }
}

let Vegetables = {
  render : async () => {
    let cardsContent =  await getCards();
    let view = '';

    view += /*html*/`<div class="rating none"></div>`

    for(let i = 0; i < cardsContent.length; i++) {
      view += /*html*/`
      <div class="card-container">
          <div class="card card-cover">
            <div class="front" style="background-image: url(../../assets${cardsContent[i].image});">
              <div class="card-header ">${cardsContent[i].word}</div>
            </div>
            <div class="back" style="background-image: url(../../assets${cardsContent[i].image});">
              <div class="card-header ">${cardsContent[i].translation}</div>
            </div>
            <div class="rotate"></div>
          </div>
        </div>
      `
      // class "none" for hide content inside card
    }

      return view
  }
  , after_render: async () => {
  }
}
export default Vegetables;