import React from "react";
import AdvantagesCard from "../../ui/advantages-card/advantages-card";
import { Advantages, StyledTitle, StyledButton } from "./styles";
import { Ul, Li } from "../../styled";
import { AppRoute } from "/src/const";

function AdvantagesList({ advantages }) {
  return advantages && advantages.length ? (
    <Advantages>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {advantages.map((advantages) => (
          <Li key={advantages.id}>
            <AdvantagesCard {...advantages} />
          </Li>
        ))}
      </Ul>
      <StyledButton minWidth={260} link={AppRoute.BUY}>
        Купить
      </StyledButton>
    </Advantages>
  ) : null;
}

export default AdvantagesList;
