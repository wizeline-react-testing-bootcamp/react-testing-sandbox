import React from "react";
import { Item } from "./SidebarMenu.styles";

interface SingleItemProps {
  id: string;
  item: object;
  isActive?: boolean;
  onClick?(...args: unknown[]): unknown;
}

const SingleItem = ({
  id,
  item,
  isActive = false,
  onClick,
}: SingleItemProps) => {
  if (!item) {
    return null;
  }

  return (
    <Item
      data-testid={`${id}`}
      id={id}
      isActive={isActive}
      onClick={() => onClick(item.id)}
    >
      {item.icon}
      {item.title}
    </Item>
  );
};

export default SingleItem;
