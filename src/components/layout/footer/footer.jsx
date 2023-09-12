import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { Copyright, StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledFooter>
  );
}

export default Footer;
