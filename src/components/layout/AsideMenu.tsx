import React from "react";
import styled from "@emotion/styled";

type HamburguerProps = {
  open: boolean;
};

export const AsideMenu = () => <div></div>;

export const SideNav = styled("nav")`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background: #437fb9;
`;

export const LogoSide = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: #fdca40;
  img {
    height: 50px;
  }
`;

export const Hamburguer = styled.button<HamburguerProps>`
  position: absolute;
  left: ${(props) => (props.open ? "250px" : "0")};
`;
