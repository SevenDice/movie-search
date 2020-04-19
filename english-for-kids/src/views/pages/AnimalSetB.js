import { categories } from "../../assets/cards";
import { createCards, getCards } from "../../services/GenerateCards";
import { playWord, startGame, flipCard } from "../../services/GameFunctions";


const AnimalSetB = {
  render: async () => {
    const cardsContent = await getCards(categories.animal_set_b);
    return createCards(cardsContent);
  }
  , after_render: async () => {
    playWord();
    flipCard();
    startGame();
  }
}
export default AnimalSetB;