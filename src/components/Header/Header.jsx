import { HeaderWrap, StyledLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderWrap>
      <StyledLink to={"/"}>Home</StyledLink>
      <StyledLink to={"/tweets"}>Tweets</StyledLink>
    </HeaderWrap>
  );
};
