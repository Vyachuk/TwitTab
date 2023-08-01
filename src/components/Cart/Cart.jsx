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
  StyledButton,
} from "./Cart.styled";
import PropTypes from "prop-types";
import { addComa } from "../../services/formatString/addComa";
import { useDispatch, useSelector } from "react-redux";
import { followingData } from "../../redux/userSelector";
import { editCardThunk } from "../../redux/userOperation";
import {
  addCartToFollowingList,
  removeCartFromFollowingList,
} from "../../redux/userSlice";
import { useState } from "react";

export const Cart = ({ data }) => {
  const { avatar, followers, tweets, user, id } = data;
  const dispatch = useDispatch();
  const followingArray = useSelector(followingData);
  const isFollowing = followingArray.includes(+id);

  const handleFollowAction = (cardId, cardData) => {
    const isInclude = followingArray.includes(+cardId);
    const newData = {
      ...cardData,
      followers: isInclude ? cardData.followers - 1 : cardData.followers + 1,
    };
    if (!isInclude) {
      dispatch(addCartToFollowingList(+cardId));
    } else {
      dispatch(removeCartFromFollowingList(+cardId));
    }
    dispatch(
      editCardThunk({
        id: +cardId,
        userObject: newData,
      })
    );
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
      <StyledButton
        isFollowing={isFollowing}
        onClick={() => handleFollowAction(id, data)}
      >
        {isFollowing ? "following" : "Follow"}
      </StyledButton>
    </CartWrap>
  );
};

Cart.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    followers: PropTypes.number,
    tweets: PropTypes.number,
    user: PropTypes.string,
    id: PropTypes.string,
  }),
};
