import styled from "styled-components";

export const HomeWrap = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomeTitle = styled.h1`
  color: ${({ theme }) => theme.colors.buttonFolowing};
  font-size: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
