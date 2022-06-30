import { useEffect } from "react";

export default function useOutside(
  containerRef,
  contextMenuRef,
  callback = () => {}
) {
  function handleClickOutside(e) {
    if (
      containerRef?.current?.contains(e.target) &&
      !contextMenuRef?.current?.contains(e.target)
    ) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
