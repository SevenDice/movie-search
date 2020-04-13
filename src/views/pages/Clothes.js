import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Clothes = {
  render : async () => {
    let cardsContent =  await getCards(categories.clothes);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Clothes;