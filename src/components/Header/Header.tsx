import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Header, ImageSpace, Links, LinkSpace, NavBarMenuBtn } from "./styles";
import logo from "../../assets/logo/logo.png";
import { useContext, useState } from "react";
import { ModalContext } from "../../contexts/modalContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { ButtonComponent } from "../Buttons";

const HeaderSpace = () => {
  const { setIsOpenModalLogin } = useContext(ModalContext);
  const [show, setShow] = useState(false);

  const { t } = useTranslation();
  function openMenu() {
    setShow((current) => !current);
  }
  return (
    <>
      <Header>
        <NavBarMenuBtn onClick={() => openMenu()}>
          <IconContext.Provider
            value={{
              color: "var(--color-grey-0)",
            }}
          >
            <GiHamburgerMenu />
          </IconContext.Provider>
        </NavBarMenuBtn>
        <ImageSpace>
          <img src={logo} alt="Port Geek" />
        </ImageSpace>
        <LinkSpace show={show}>
          <AnchorLink href="#section-about" offset={100}>
            <Links onClick={() => openMenu()}>About us</Links>
          </AnchorLink>
          <Links onClick={() => setIsOpenModalLogin(true)}>Login</Links>
        </LinkSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
