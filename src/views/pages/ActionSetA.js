import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const ActionSetA = {
  render: async () => {
    const cardsContent = await getCards(categories.action_set_a);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default ActionSetA;