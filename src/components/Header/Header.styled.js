import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  height: ${({ theme }) => theme.spacing(12)};
  background: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: ${({ theme }) => theme.shadows.box};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(12)};
`;

export const StyledLink = styled(NavLink)`
  transition: transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    color: ${({ theme }) => theme.colors.buttonFolowing};
  }
`;
