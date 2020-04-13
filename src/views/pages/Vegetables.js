import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Vegetables = {
  render : async () => {
    let cardsContent =  await getCards(categories.vegetables);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Vegetables;