import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const ActionSetB = {
  render: async () => {
    const cardsContent = await getCards(categories.action_set_b);
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default ActionSetB;