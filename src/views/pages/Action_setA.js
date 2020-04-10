import cards from "../../assets/cards.js";

let getCards = async () => {
  try {
    const cardsData = cards[3];
    return cardsData;
  }

  catch (err) {
    console.log('Error to get cards data', err);
  }
}



let Action_setA = {
  render : async () => {
    let cardsContent =  await getCards();

    
    let view = '';

    view += /*html*/`<div class="rating none"></div>`

    for(let i = 0; i < cardsContent.length; i++) {
      view += /*html*/`
      <div class="card-container">
          <div class="card card-cover">
            <div class="front" style="background-image: url(../../assets/${cardsContent[0].image};">
              <div class="card-header none">${cardsContent[i].word}</div>
            </div>
            <div class="back" style="background-image: url(./assets/${cardsContent[0].image};">
              <div class="card-header none">${cardsContent[i].translation}</div>
            </div>
            <div class="rotate none"></div>
          </div>
        </div>
      `
    }

    console.log(cardsContent[0]);
    console.log(cardsContent[0].word);
    console.log(cardsContent[0].translation);
    console.log(cardsContent[0].image);
    console.log(cardsContent[0].audioSrc);


      // let view =  /*html*/`
      //     <section class="section">
      //         <h1> Action_setA </h1>
      //     </section>
      // `
      return view
  }
  , after_render: async () => {
  }
}
export default Action_setA;