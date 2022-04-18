import React from "react";
import { Item } from "./SidebarMenu.styles";

interface SingleItemProps {
  item: object;
  isActive?: boolean;
  onClick?(...args: unknown[]): unknown;
}

const SingleItem = ({ item, isActive = false, onClick }: SingleItemProps) => {
  if (!item) {
    return null;
  }

  return (
    <Item isActive={isActive} onClick={() => onClick(item.id)}>
      {item.icon}
      {item.title}
    </Item>
  );
};

export default SingleItem;
