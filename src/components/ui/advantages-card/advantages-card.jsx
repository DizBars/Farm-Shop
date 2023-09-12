import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { Advantage, Image, Owner, Header, Text } from "./styles";

function AvantagesCard({
  title, // название особенности
  about, // описание особенности
  owner, // производитель
  image, // URL c иконкой особенности
  isNegative // негативная ли особенность
}) {
  return (
    <Advantage isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Advantage>
  );
}

export default AvantagesCard;
