import styled from "styled-components";

export const CartWrap = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding: 28px 36px;

  border-radius: ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: ${({ theme }) => theme.shadows.box};
`;

export const GoItLogo = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
  & use {
    transform: scale(1.46);
  }
`;

export const Rect = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  box-shadow: ${({ theme }) => theme.shadows.rectangle};
`;
export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(20)};
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.mainColor};
  box-shadow: ${({ theme }) => theme.shadows.circle};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CirclePhoto = styled.img`
  border-radius: 50%;
  width: ${({ theme }) => theme.spacing(15.5)};
  height: ${({ theme }) => theme.spacing(15.5)};
`;

export const UpperInfoWrap = styled.div`
  width: 308px;
  height: 168px;
  margin: 0 auto;
  margin-bottom: 88px;

  background: url("src/assets/images/backPhoto@1x.png");
`;

export const TweetsText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const FollowersText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(6.5)};
`;

export const StyledButton = styled.button`
  min-width: 196px;
  min-height: 50px;
  padding: 14px 28px;

  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.button};
  background-color: ${({ isFollowing }) =>
    isFollowing ? "#5CD3A8" : "#EBD8FF"};

  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonTextColor};
  &:hover {
    opacity: 0.8;
  }
`;
