import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Fruits = {
  render : async () => {
    let cardsContent =  await getCards(categories.fruits);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Fruits;