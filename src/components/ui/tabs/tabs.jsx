import React, { useState } from "react";
import { TitleList, TitleButton, TitleText, Content } from "./styles";
import { TitleSize } from "../../ui/title/title";

function Tabs({ tabsList = [], maxContentHeight }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitleList>
        {tabsList.map((item, index) => {
          if (index === activeTab) {
            return (
              <TitleButton as="span" active key={item.title}>
                <TitleText size={TitleSize.GIGA_SMALL} active as="h2">
                  {item.title}
                </TitleText>
              </TitleButton>
            );
          }
          return (
            <TitleButton
              as="span"
              key={item.title}
              onClick={() => setActiveTab(index)}
            >
              <TitleText size={TitleSize.GIGA_SMALL} as="h2">
                {item.title}
              </TitleText>
            </TitleButton>
          );
        })}
      </TitleList>
      <Content $maxContentHeight={maxContentHeight}>
        {tabsList[activeTab].content}
      </Content>
    </div>
  );
}

export default Tabs;
