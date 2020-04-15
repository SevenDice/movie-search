import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const Vegetables = {
  render: async () => {
    const cardsContent = await getCards(categories.vegetables);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Vegetables;