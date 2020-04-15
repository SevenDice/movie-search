import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const AnimalSetB = {
  render: async () => {
    const cardsContent = await getCards(categories.animal_set_b);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default AnimalSetB;