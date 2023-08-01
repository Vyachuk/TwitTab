import styled from "styled-components";

export const LoadingWrap = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
`;
