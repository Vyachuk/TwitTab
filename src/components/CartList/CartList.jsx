import { useEffect } from "react";
import { getAllCardsThunk } from "../../redux/userOperation";
import { useSelector, useDispatch } from "react-redux";
import { allCardTweets, followingData } from "../../redux/userSelector";
import { Cart } from "../Cart/Cart";
import {
  BackBtn,
  CardsList,
  LoadMoreBtn,
  StyledWrapper,
} from "./CartList.styled";
import { useState } from "react";
import { MySelect } from "../MySelect/MySelect";
import { useNavigate } from "react-router-dom";

export const CartList = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState({
    value: "all",
    label: "Show all",
  });
  const dispatch = useDispatch();
  const followingArray = useSelector(followingData);
  const allCards = useSelector(allCardTweets);

  const [filteredDataCart, setFilteredDataCart] = useState([]);
  const [paginationData, setPaginationData] = useState({
    perPage: 3,
    page: 1,
    paginationCount: 1,
    cardsForPage: [],
  });
  useEffect(() => {
    dispatch(getAllCardsThunk());
  }, [dispatch]);
  useEffect(() => {
    const filteredData = allCards.filter((card) => {
      if (selectedFilter.value === "all") return card;
      if (selectedFilter.value === "following")
        return followingArray.includes(+card.id);
      else return !followingArray.includes(+card.id);
    });
    setFilteredDataCart(filteredData);
    setPaginationData({ ...paginationData, page: 1 });
  }, [selectedFilter.value, allCards]);
  useEffect(() => {
    const paginationCount = Math.ceil(
      filteredDataCart?.length / paginationData.perPage
    );
    setPaginationData({
      ...paginationData,
      paginationCount: paginationCount || 1,
      cardsForPage: filteredDataCart.filter(
        (card, index) => index < paginationData.perPage
      ),
    });
  }, [filteredDataCart]);

  const handleAddMoreCards = () => {
    const newCards = filteredDataCart.filter(
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

  const isButtonShow = paginationData.paginationCount !== paginationData.page;
  console.log(paginationData.paginationCount, paginationData.page);
  return (
    <>
      <StyledWrapper>
        <BackBtn onClick={() => navigate("/")}>Go Back</BackBtn>
        <MySelect filter={selectedFilter} setFilter={setSelectedFilter} />
      </StyledWrapper>

      <CardsList>
        {paginationData.cardsForPage.map((card) => (
          <li key={card.id}>
            <Cart data={card} />
          </li>
        ))}
      </CardsList>
      {isButtonShow && (
        <LoadMoreBtn onClick={handleAddMoreCards}>Load More</LoadMoreBtn>
      )}
    </>
  );
};
