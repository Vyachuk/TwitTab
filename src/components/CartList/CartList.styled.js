import styled from "styled-components";
import { StyledButton } from "../Cart/Cart.styled";

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(12)};
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const LoadMoreBtn = styled(StyledButton)`
  min-width: ${({ theme }) => theme.spacing(80)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const BackBtn = styled(StyledButton)`
  min-height: 0;
  min-width: ${({ theme }) => theme.spacing(40)};
  height: ${({ theme }) => theme.spacing(10)};
  padding: 10px 20px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spacing(5)};
`;
