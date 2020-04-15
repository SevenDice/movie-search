import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const Fruits = {
  render: async () => {
    const cardsContent = await getCards(categories.fruits);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Fruits;