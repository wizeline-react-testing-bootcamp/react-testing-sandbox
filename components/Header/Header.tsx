import React from "react";
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";
import ActionsMenu from "./ActionsMenu";
import { HeaderWrapper, Logo } from "./Header.styles";
import logoUrl from "../../public/assets/images/reddit_logo.svg";

const Header = () => (
  <HeaderWrapper>
    <Logo>
      <Image src={logoUrl} width="140px" height="46px" />
    </Logo>
    <HeaderMenu activeItem="popular" />
    <ActionsMenu />
  </HeaderWrapper>
);

export default Header;
