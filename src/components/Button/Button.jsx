import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

export const Button = ({ func, text, type }) => {
  return (
    <StyledButton type={type} onClick={func}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  func: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};
