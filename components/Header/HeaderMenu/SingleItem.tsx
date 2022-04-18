import React from "react";
import { Item } from "./HeaderMenu.styles";

interface SingleItemProps {
  item: {
    id: string;
    title: string;
  };
  active?: boolean | undefined;
}

const SingleItem = ({ item, active }: SingleItemProps) => (
  <Item href={item.id} active={active}>
    {item.title}
  </Item>
);

export default SingleItem;
