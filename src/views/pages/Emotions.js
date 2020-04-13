import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Emotions = {
  render : async () => {
    let cardsContent =  await getCards(categories.emotions);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Emotions;