import React, { useRef } from "react";

import ContextMenu from "../ContextMenu";

import "./index.scss";

const Container = ({ children, menuItems }) => {
  const containerRef = useRef();

  return (
    <div className="container" ref={containerRef}>
      {children}

      <ContextMenu parentRef={containerRef} items={menuItems} />
    </div>
  );
};

export default Container;
