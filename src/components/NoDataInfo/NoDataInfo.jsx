import { StyledText } from "../CartList/CartList.styled";
import { NoDataIcon } from "./NoDataInfo.styled";

export const NoDataInfo = () => {
  return (
    <>
      <NoDataIcon />
      <StyledText>
        We have nothing to show, please change the filter.
      </StyledText>
    </>
  );
};
