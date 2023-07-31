import { useEffect } from "react";
import { getAllCardsThunk } from "../../redux/userOperation";
import { useSelector, useDispatch } from "react-redux";
import { allCardTweets } from "../../redux/userSelector";
import { Cart } from "../Cart/Cart";
import { CardsList, LoadMoreBtn } from "./CartList.styled";
import { useState } from "react";

export const CartList = () => {
  const dispatch = useDispatch();
  const allCards = useSelector(allCardTweets);
  const [paginationData, setPaginationData] = useState({
    perPage: 3,
    page: 1,
    cardsForPage: [],
  });
  useEffect(() => {
    dispatch(getAllCardsThunk())
      .unwrap()
      .then((data) => {
        const firstCards = data.filter(
          (item, index) => index < paginationData.perPage
        );
        setPaginationData({ ...paginationData, cardsForPage: firstCards });
      });
  }, [dispatch]);

  const handleAddMoreCards = () => {
    const newCards = allCards.filter(
      (item, index) =>
        index >= paginationData.perPage * paginationData.page &&
        index < paginationData.perPage * (paginationData.page + 1)
    );
    setPaginationData({
      ...paginationData,
      page: paginationData.page + 1,
      cardsForPage: [...paginationData.cardsForPage, ...newCards],
    });
  };

  const paginationCount = Math.ceil(allCards?.length / paginationData.perPage);
  const showLoadMoreBtn = paginationCount > paginationData.page;

  return (
    <>
      <CardsList>
        {paginationData.cardsForPage.map((card) => (
          <li key={card.id}>
            <Cart data={card} />
          </li>
        ))}
      </CardsList>
      {showLoadMoreBtn && (
        <LoadMoreBtn onClick={handleAddMoreCards}>Load More</LoadMoreBtn>
      )}
    </>
  );
};
