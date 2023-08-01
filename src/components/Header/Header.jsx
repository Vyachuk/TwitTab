import { NavLink } from "react-router-dom";
import { HeaderWrap } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderWrap>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/tweets"}>Tweets</NavLink>
    </HeaderWrap>
  );
};
