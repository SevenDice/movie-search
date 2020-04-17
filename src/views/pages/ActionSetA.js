/* eslint func-names: ["error", "never"] */
import { categories } from "../../assets/cards"
import { createCards, getCards, playWord, flipCard } from '../../services/GenerateCards'
import { gameMode } from "../../services/GameLogic"

const ActionSetA = {
  render: async () => {
    const cardsContent = await getCards(categories.action_set_a);
    return createCards(cardsContent);
  }
  , after_render: async () => {
    flipCard();
    playWord();
  }
}
export default ActionSetA;