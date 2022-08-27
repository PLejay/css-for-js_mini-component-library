import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const StyledWrapper = styled.div`
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  width: min-content;
  position: relative;
  padding: 12px 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  column-gap: 16px;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
  & > select {
    background: transparent;
    color: transparent;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 8px;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledWrapper>
      <span>{displayedValue}</span>
      <Icon id="chevron-down" strokeWidth={2} />
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </StyledWrapper>
  );
};

export default Select;
