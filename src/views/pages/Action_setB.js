import cards from "../../assets/cards.js";
import {createCards} from '../../services/GenerateCards.js'

let getCards = async () => {
  try {
    const cardsData = cards[4];
    return cardsData;
  }

  catch (err) {
    console.log('Error to get cards data', err);
  }
}

let Action_setB = {
  render : async () => {
    let cardsContent =  await getCards();
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Action_setB;