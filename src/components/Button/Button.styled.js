import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  min-width: 196px;
  min-height: 50px;
  padding: 14px 28px;

  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.button};
  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonTextColor};
  &:hover {
    opacity: 0.8;
  }

  ${({ type }) =>
    type === "follow" &&
    css`
      background-color: ${({ theme }) => theme.colors.mainColor};
    `}

  ${({ type }) =>
    type === "following" &&
    css`
      background-color: ${({ theme }) => theme.colors.buttonFolowing};
    `}
  ${({ type }) =>
    type === "loadMore" &&
    css`
      min-width: ${({ theme }) => theme.spacing(80)};
      margin-bottom: ${({ theme }) => theme.spacing(6)};
    `}

  ${({ type }) =>
    type === "backBtn" &&
    css`
      min-height: 0;
      min-width: ${({ theme }) => theme.spacing(40)};
      height: ${({ theme }) => theme.spacing(10)};
      padding: 10px 20px;
    `}
`;
