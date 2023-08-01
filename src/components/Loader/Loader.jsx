import { ThreeCircles } from "react-loader-spinner";
import { StyledText } from "../CartList/CartList.styled";
import { LoadingWrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoadingWrap>
      <StyledText>Loading...</StyledText>

      <ThreeCircles
        height="100"
        width="100"
        color="#471CA9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoadingWrap>
  );
};
