import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Animal_setB = {
  render : async () => {
    let cardsContent =  await getCards(categories.animal_set_b);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Animal_setB;