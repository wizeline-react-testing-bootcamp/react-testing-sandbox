import React from "react";
import SidebarTitle from "../SidebarTitle";
import { SectionWrapper } from "./SidebarSection.styles";

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <SectionWrapper>
    <SidebarTitle text={title} />
    {children}
  </SectionWrapper>
);

export default SidebarSection;
