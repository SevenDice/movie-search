import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const Emotions = {
  render: async () => {
    const cardsContent = await getCards(categories.emotions);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Emotions;