import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/header-logo.svg";
import { AppRoute } from "/src/const";
import { Text, StyledLogo } from "./styles";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
