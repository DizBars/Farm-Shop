import styled, { css } from "styled-components";
import { TextInput } from "../../ui/text-input/text-input";
import { Section, Lable } from "/src/components/styled";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";

export const StyledOrder = styled(Section)`
  background-color: ${(props) => props.theme.colorGray};
  padding-bottom: 0;
  gap: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: absolute;
  top: 20px;
  bottom: 80px;
`;

export const LeftColumn = styled.div`
  width: 353px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const AdressInput = styled(TextInput)`
  margin-bottom: 20px;
`;

export const PriceLable = styled(Lable)`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colorBlackForText};
`;

export const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }

  .swiper-wrapper {
    position: absolute;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
