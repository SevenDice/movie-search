/* eslint func-names: ["error", "never"] */
import { categories } from "../../assets/cards";
import { createCards, getCards } from '../../services/GenerateCards'

const ActionSetA = {
  render: async () => {
    const cardsContent = await getCards(categories.action_set_a);
    return createCards(cardsContent);
  }
  , after_render: async () => {
    const container = document.getElementById('page_container');
    container.onclick = function (event) {
      if (event.target.className !== 'front') {
        return
      }
      const card = event.target.closest('.card-container');
      card.remove();
    }
  }
}
export default ActionSetA;