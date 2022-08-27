import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    "--border-width": "1px",
    "--font-size": "14px",
    "--icon-bottom": "3px",
    "--icon-left": "4px",
    "--padding-left": "24px",
  },
  large: {
    "--border-width": "2px",
    "--font-size": "18px",
    "--icon-bottom": "4px",
    "--icon-left": "4px",
    "--padding-left": "32px",
  },
};

const IconWrapper = styled.div`
  position: absolute;
  bottom: var(--icon-bottom);
  left: var(--icon-left);
`;

const Wrapper = styled.div`
  position: relative;
  border-bottom-width: var(--border-width);
  border-bottom-style: solid;
  display: flex;
  width: ${({ width }) => width + "px"};
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  font-size: var(--font-size);
  padding-left: var(--padding-left);
  outline-offset: 4px;
  border-radius: 2px;
  color: ${COLORS.gray700};
  font-weight: 700;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];
  return (
    <Wrapper {...{ style, width }}>
      <IconWrapper style={style}>
        <Icon id={icon} size={size === "small" ? 14 : 18} />
      </IconWrapper>
      <StyledInput
        aria-label={label}
        type="text"
        id="icon-input"
        placeholder={placeholder}
        style={style}
      ></StyledInput>
    </Wrapper>
  );
};

export default IconInput;
