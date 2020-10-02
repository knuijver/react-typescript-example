import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React, { SFC } from "react";

export type ContainerProps = {
  column?: string;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.column && "column"};
  width: 100%;
`;

const titleStyle = css`
  background-color: black;
  color: white;
  font-weight: bolder;
  padding-bottom: 5pt;
  padding-top: 5pt;
`;

const HeaderTest = styled.div`
  background-color: black;
  color: white;
  font-weight: bolder;
  padding-bottom: 5pt;
  padding-top: 5pt;
`;

const Header: SFC<any> = (props) => {
  const { children } = props;
  return <HeaderTest {...props}>{children}</HeaderTest>;
};

export { Container, Header };
