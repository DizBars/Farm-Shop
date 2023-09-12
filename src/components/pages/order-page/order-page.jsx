import React, { useState } from "react";
import Panel from "../../ui/panel/panel";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "/src/components/ui/button/button";
import {
  LeftColumn,
  PriceLable,
  PriceValue,
  StyledOrder,
  AdressInput,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import ProductCard from "../../ui/product-card/product-card";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function OrderPage({
  products // список продуктов
}) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [address, setAddress] = useState("");
  const [swiperRef, setSwiperRef] = useState(null);
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const handleBuy = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  return products && products.length ? (
    <>
      <StyledOrder as="form">
        <LeftColumn>
          <Panel>
            <Title marginBottom={12} as="h3" size={TitleSize.EXTRA_SMALL}>
              Выберите продукты
            </Title>
            <CheckboxList
              labelComponent={CheckboxLabel}
              name={"select-products"}
              isGridList={false}
              options={products.map((product) => ({
                value: product.id,
                title: product.name
              }))}
              selectValues={selectProductIds}
              onChange={setSelectProductIds}
              onClickLabel={handleOnClickProduct}
            />
          </Panel>
          <Panel>
            <Title marginBottom={24} as="h3" size={TitleSize.EXTRA_SMALL}>
              Сделать заказ
            </Title>
            <AdressInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Введите адрес доставки"
            ></AdressInput>
            <PriceLable>Цена</PriceLable>
            <PriceValue>{fullPrice} руб.</PriceValue>
            <Button onClick={handleBuy}>Купить</Button>
          </Panel>
        </LeftColumn>
        <ProductSwiper
          onSwiper={setSwiperRef}
          spaceBetween={12}
          direction="vertical"
          slidesPerView="auto"
          mousewheel
          pagination={{
            type: "fanction"
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product}></ProductCard>
            </SwiperSlide>
          ))}
        </ProductSwiper>
      </StyledOrder>
    </>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default OrderPage;
