import { useEffect } from "react";
import { getAllCardsThunk } from "../../redux/userOperation";
import { useSelector, useDispatch } from "react-redux";
import { allCardTweets } from "../../redux/userSelector";
import { Cart } from "../Cart/Cart";
import { CardsList } from "./CartList.styled";

export const CartList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCardsThunk());
  }, [dispatch]);
  const allCards = useSelector(allCardTweets);
  return (
    <CardsList>
      {allCards.map((card) => (
        <li key={card.id}>
          <Cart data={card} />
        </li>
      ))}
    </CardsList>
  );
};
