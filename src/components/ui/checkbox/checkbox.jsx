import React from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "../../styled";

const Label = styled.label`
  display: block;
`;

// Радиокнопка
function Checkbox({
  onClick,
  labelComponent,
  isChecked, // компонент для отображения label
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;
