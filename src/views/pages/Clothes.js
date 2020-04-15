import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const Clothes = {
  render: async () => {
    const cardsContent = await getCards(categories.clothes);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Clothes;