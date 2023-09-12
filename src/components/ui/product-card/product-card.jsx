import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { Image, Product, Price } from "./styles";
import Tabs from "../../ui/tabs/tabs";
import OptionsList from "../../ui/optional-list/optional-list";

function ProductCard({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <Product>
      <Image width={248} height={248} src={product.image} alt={product.name} />
      <Title marginBottom={16} as="h2" size={TitleSize.SMALL}>
        {product.name}
      </Title>
      <Tabs maxContentHeight="105px" tabsList={tabsList} />
      <Price>
        {product.price} руб./{product.weight} гр.
      </Price>
    </Product>
  );
}

export default ProductCard;
