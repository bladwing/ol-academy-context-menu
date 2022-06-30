import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ContextMenu from "./ContextMenu";
import IsSparta from "../resource/IsSparta.jpg";

const Item = styled.div`
  background: #135c5c;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background: #39acac;
  }
`;
const Div = styled.div`
  padding: 20px;
  border: 1px solid green;
  border-radius: 10px;
  margin-bottom: 10%;
  background-color: #1eb1b1;
  &:hover {
    background-color: #135c5c;
    cursor: pointer;
    border: 1px solid #fff;
  }
`;
const H1 = styled.h1`
  font-size: 18px;
`;
const Img = styled.img`
  width: 200px;
`;

export default function MyComponent() {
  const [contextMenu, setContextMenu] = useState({
    contextMenuVisibility: false,
    contextMenuTop: 0,
    contextMenuLeft: 0,
  });

  const onClose = useCallback(() => {
    setContextMenu({
      contextMenuVisibility: false,
      contextMenuTop: 0,
      contextMenuLeft: 0,
    });
  }, [setContextMenu]);

  const onItemClick = useCallback(
    (text) => {
      alert(text);
      onClose();
    },
    [onClose]
  );

  const onRightClick = useCallback(
    (e) => {
      e.preventDefault();
      setContextMenu({
        contextMenuVisibility: true,
        contextMenuTop: e.clientY,
        contextMenuLeft: e.clientX,
      });
    },
    [setContextMenu]
  );

  const { contextMenuTop, contextMenuLeft, contextMenuVisibility } =
    contextMenu;

  return (
    <div>
      {contextMenuVisibility && (
        <ContextMenu
          top={contextMenuTop}
          left={contextMenuLeft}
          close={onClose}
        >
          <Img src={IsSparta} alt="sparta" />
          <H1>This is.... Cotext Menu</H1>
          <Item onClick={onItemClick.bind(null, "This is... Edit....")}>
            {" "}
            შეცვლა{" "}
          </Item>

          <Item onClick={onItemClick.bind(null, "This is... Delete...")}>
            {" "}
            წაშლა{" "}
          </Item>
        </ContextMenu>
      )}
      <Div onContextMenu={onRightClick}>
        Click Me - Right Mouse Button and choose you destiny...
      </Div>

      <Div onContextMenu={onRightClick}>
        Click Me - Right Mouse Button and choose you destiny...
      </Div>

      <Div onContextMenu={onRightClick}>
        Click Me - Right Mouse Button and choose you destiny...
      </Div>
    </div>
  );
}
