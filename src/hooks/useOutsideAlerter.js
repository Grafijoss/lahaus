import { useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideAlerter({ buttonRef, wrapperRef }) {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        !buttonRef?.current.contains(event.target) &&
        !wrapperRef?.current.contains(event.target)
      ) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef, wrapperRef]);

  return {
    clickedOutside
  };
}
