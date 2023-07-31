import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCardsThunk } from "../../redux/userOperation";

export const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCardsThunk());
  }, [dispatch]);

  return (
    <div>
      Dasdasd34343
      <div>
        <img src="" alt="" />
      </div>
      <img src="" alt="" />
      <p></p>
      <p></p>
      <button></button>
    </div>
  );
};
