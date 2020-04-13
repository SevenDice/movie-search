import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Action_setA = {
  render : async () => {
    let cardsContent =  await getCards(categories.action_set_a);
      return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Action_setA;