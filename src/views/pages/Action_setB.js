import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Action_setB = {
  render : async () => {
    let cardsContent =  await getCards(categories.action_set_b);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Action_setB;