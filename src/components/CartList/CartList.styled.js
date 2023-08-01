import styled from "styled-components";

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(12)};
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spacing(5)};
`;

export const StyledText = styled.p`
  margin-top: ${({ theme }) => theme.spacing(10)};
  color: ${({ theme }) => theme.colors.buttonTextColor};
`;
