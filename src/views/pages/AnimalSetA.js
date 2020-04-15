import {categories} from "../../assets/cards";
import {createCards, getCards} from '../../services/GenerateCards'

const AnimalSetA = {
  render : async () => {
    const cardsContent =  await getCards(categories.animal_set_a);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default AnimalSetA;