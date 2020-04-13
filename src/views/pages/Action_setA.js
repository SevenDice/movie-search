import cards from "../../assets/cards.js";
import {createCards} from '../../services/GenerateCards.js'

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
      return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Action_setA;