import React from "react";
import Avatar from "../../Avatar";
import { Contributor, Content } from "./Contributors.styles";

interface ContributorItemProps {
  item: object;
}

const ContributorItem = ({ item }: ContributorItemProps) => {
  if (!item) {
    return null;
  }

  return (
    <Contributor>
      <Content>
        {item.type === "text" && item.text !== "" ? (
          <Avatar
            innerText={item.text}
            backgroundColor={item.backgroundColor}
          />
        ) : (
          <Avatar imageSrc={item.imageURL} />
        )}
      </Content>
    </Contributor>
  );
};

export default ContributorItem;
