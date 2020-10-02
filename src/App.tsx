import { CssBaseline } from "@material-ui/core";
import * as React from "react";
import {
  Container,
  Header,
  Footer,
  LogoNavigation,
  SideNav
} from "./components/layout";

import { OfficeRatingGrid } from "./components/officeratings";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <SideNav>
          <LogoNavigation isOpen={true} />
        </SideNav>
        <Container column="row">
          <Header>Put your BM quote here</Header>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <OfficeRatingGrid url="sampledata.json" />
        </Container>
      </Container>
      <Footer />
    </div>
  );
}
