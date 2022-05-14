import { useRef, useEffect } from "react";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import Profile from "../Profile/Profile";
import { DropDownContainer } from "./Styles";

const DropDownMenu = ({ closePerfilHandler, buttonRef }) => {
  const wrapperRef = useRef(null);
  const { clickedOutside } = useOutsideAlerter({ buttonRef, wrapperRef });

  useEffect(() => {
    if (clickedOutside) closePerfilHandler();
  }, [clickedOutside]);

  return (
    <DropDownContainer ref={wrapperRef}>
      <Profile />
    </DropDownContainer>
  );
};

export default DropDownMenu;
