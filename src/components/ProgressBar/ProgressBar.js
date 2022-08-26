/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--filledHeight": "8px",
    "--height": "8px",
  },
  medium: {
    "--filledHeight": "12px",
    "--height": "12px",
  },
  large: {
    "--filledHeight": "16px",
    "--height": "24px",
    "--padding": "4px",
  },
};

const StyledProgress = styled.div`
  box-sizing: border-box;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  min-width: 100px;
  max-width: 200px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: var(--padding);
`;

const StyledFilledBarWrapper = styled.div`
  height: var(--filledHeight);
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledFilledBar = styled.div`
  height: var(--filledHeight);
  background: ${COLORS.primary};
  width: ${({ value }) => value + "%"};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <StyledProgress aria-hidden={true} value={value} style={SIZES[size]}>
        <StyledFilledBarWrapper style={SIZES[size]}>
          <StyledFilledBar style={SIZES[size]} value={value} />
        </StyledFilledBarWrapper>
      </StyledProgress>
      <VisuallyHidden>
        <progress
          aria-label="progress bar"
          aria-valuenow={value}
          max={100}
          value={value}
        ></progress>
        {value} %
      </VisuallyHidden>
    </>
  );
};

export default ProgressBar;
