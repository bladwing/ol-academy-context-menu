import React, { useContext, useRef } from "react";
import styled from "styled-components";
import useOutside from "./UseOutside";
import OutsideContext from "./OutsideContext";

const MenuContainer = styled.div`
  position: absolute;
  border: 1px solid black;
  background-color: #135c5c;
  font-size: 19px;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 0 2px 2px black;
  ${(props) => `
    top: ${props.top || 0}px;
    left: ${props.left || 0}px;
  `}
`;

export default function ContextMenu({ children, top, left, close }) {
  const outerRef = useContext(OutsideContext);
  const contextMenuRef = useRef(null);

  useOutside(outerRef, contextMenuRef, close);

  return (
    <MenuContainer ref={contextMenuRef} top={top} left={left}>
      {children}
    </MenuContainer>
  );
}
