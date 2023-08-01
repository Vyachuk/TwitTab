import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { getAllCardsThunk } from "../../redux/userOperation";
import { HomeTitle, HomeWrap } from "./Home.styled";

export const Home = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState("");
  useEffect(() => {
    dispatch(getAllCardsThunk())
      .unwrap()
      .then((data) => setstate(data));
  }, [dispatch]);

  return (
    <HomeWrap>
      <HomeTitle>The most popular tweet!</HomeTitle>
      {state && <Cart data={state[Math.ceil(Math.random() * 12)]} />}
    </HomeWrap>
  );
};
