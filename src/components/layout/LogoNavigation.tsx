import * as React from "react";
import { Hamburguer, LogoSide } from "./AsideMenu";
import { NiceLogo } from "./SvgLogo";

interface SideBar {
  isOpen: boolean;
}

export const LogoNavigation: React.FC<SideBar> = ({ isOpen }) => {
  return (
    <LogoSide>
      <NiceLogo />
      <Hamburguer open={isOpen}>
        <div />
        <div />
        <div />
      </Hamburguer>
    </LogoSide>
  );
};
