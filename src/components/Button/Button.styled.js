import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 196px;
  min-height: 50px;
  padding: 14px 28px;

  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.button};
  background-color: ${({ theme }) => theme.colors.mainColor};

  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonTextColor};
  &:hover {
    opacity: 0.8;
  }
`;
