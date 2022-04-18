import React from "react";
import { Title } from "../Sidebar.styles";

interface SidebarTitleProps {
  text: string;
}

const SidebarTitle = ({ text }: SidebarTitleProps) => <Title>{text}</Title>;

export default SidebarTitle;
