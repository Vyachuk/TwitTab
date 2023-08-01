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
