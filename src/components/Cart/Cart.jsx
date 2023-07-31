import goItLogo from "../../assets/images/sprite.svg";
import {
  CartWrap,
  Circle,
  CirclePhoto,
  GoItLogo,
  Rect,
  UpperInfoWrap,
  TweetsText,
  FollowersText,
} from "./Cart.styled";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import { addComa } from "../../services/formatString/addComa";
import { useSelector } from "react-redux";
import { followingData } from "../../redux/userSelector";

export const Cart = ({ data }) => {
  const { avatar, followers, tweets, user } = data;
  const dispatch = useDispatch();
  // const followingArray = useSelector(followingData);

  const handleFollowAction = () => {
    dispatch(editCardThunk);
  };
  return (
    <CartWrap>
      <GoItLogo width="76" height="22">
        <use href={goItLogo + "#icon-GoItLogo"}></use>
      </GoItLogo>
      <Rect></Rect>
      <Circle>
        <CirclePhoto src={avatar} alt={user} />
      </Circle>
      <UpperInfoWrap></UpperInfoWrap>

      <TweetsText>{tweets} tweets</TweetsText>
      <FollowersText>
        {followers.length < 3 ? followers : addComa(followers)} followers
      </FollowersText>
      <Button onClick={handleFollowAction} text={"follow"} />
    </CartWrap>
  );
};

Cart.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    followers: PropTypes.number,
    tweets: PropTypes.number,
    user: PropTypes.string,
  }),
};
