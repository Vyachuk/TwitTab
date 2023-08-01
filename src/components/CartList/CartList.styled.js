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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(5)};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledText = styled.p`
  margin-top: ${({ theme }) => theme.spacing(10)};
  color: ${({ theme }) => theme.colors.buttonTextColor};
`;
