import { useEffect } from "react";
import { getAllCardsThunk } from "../../redux/userOperation";
import { useSelector, useDispatch } from "react-redux";
import {
  allCardTweets,
  followingData,
  selectIsLoading,
} from "../../redux/userSelector";
import { Cart } from "../Cart/Cart";
import { CardsList, StyledWrapper } from "./CartList.styled";
import { useState } from "react";
import { MySelect } from "../MySelect/MySelect";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { NoDataInfo } from "../NoDataInfo/NoDataInfo";
import { Button } from "../Button/Button";

export const CartList = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState({
    value: "all",
    label: "Show all",
  });
  const dispatch = useDispatch();
  const followingArray = useSelector(followingData);
  const allCards = useSelector(allCardTweets);
  const isLoading = useSelector(selectIsLoading);
  const [filteredCards, setFilteredCards] = useState([]);

  // const [filteredDataCart, setFilteredDataCart] = useState([]);
  const [paginationData, setPaginationData] = useState({
    perPage: 3,
    page: 1,
    paginationCount: 1,
    cardsForPage: [],
  });
  useEffect(() => {
    dispatch(getAllCardsThunk())
      .unwrap()
      .then((data) =>
        setPaginationData({
          ...paginationData,
          paginationCount: Math.ceil(data.length / paginationData.perPage),
          cardsForPage: data.filter(
            (card, index) => index < paginationData.perPage
          ),
        })
      );
  }, [dispatch]);
  useEffect(() => {
    const filteredData = allCards.filter((card) => {
      if (selectedFilter.value === "all") return card;
      if (selectedFilter.value === "following")
        return followingArray.includes(+card.id);
      else return !followingArray.includes(+card.id);
    });
    setFilteredCards(filteredData);
    setPaginationData({
      ...paginationData,
      paginationCount: Math.ceil(filteredData.length / paginationData.perPage),
      cardsForPage: filteredData.filter(
        (card, index) => index < paginationData.perPage * paginationData.page
      ),
    });
  }, [allCards, selectedFilter.value]);

  const handleAddMoreCards = () => {
    const newCards = filteredCards.filter(
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

  const isButtonShow = paginationData.paginationCount > paginationData.page;
  return (
    <>
      <StyledWrapper>
        <Button func={() => navigate("/")} text={"Go Back"} type={"backBtn"} />
        <MySelect filter={selectedFilter} setFilter={setSelectedFilter} />
      </StyledWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsList>
            {paginationData.cardsForPage.length ? (
              paginationData.cardsForPage.map((card) => (
                <li key={card.id}>
                  <Cart data={card} />
                </li>
              ))
            ) : (
              <NoDataInfo />
            )}
          </CardsList>
          {isButtonShow && (
            <Button
              func={handleAddMoreCards}
              text={"Load more"}
              type={"loadMore"}
            />
          )}
        </>
      )}
    </>
  );
};
