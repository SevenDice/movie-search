import {categories} from "../../assets/cards.js";
import {createCards} from '../../services/GenerateCards.js'

let Animal_setA = {
  render : async () => {
    let cardsContent =  await getCards(categories.animal_set_a);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Animal_setA;