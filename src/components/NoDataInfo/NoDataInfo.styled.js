import styled from "styled-components";
import { FcHighPriority } from "react-icons/fc";

export const NoDataIcon = styled(FcHighPriority)`
  width: ${({ theme }) => theme.spacing(40)};
  height: ${({ theme }) => theme.spacing(40)};
`;
