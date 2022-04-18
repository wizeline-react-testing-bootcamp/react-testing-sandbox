import React from "react";
import { MdSearch, MdNotificationsNone } from "react-icons/md";
import Avatar from "../../Avatar";
import {
  ActionsMenuWrapper,
  ActionItem,
  ProfileSection,
  UserInfo,
  Name,
  Email,
} from "./ActionsMenu.styles";

interface ActionsMenuProps {
  active?: boolean;
}

const ActionsMenu = ({ active }: ActionsMenuProps) => (
  <ActionsMenuWrapper>
    <ActionItem>
      <MdSearch />
    </ActionItem>
    <ActionItem>
      <MdNotificationsNone />
    </ActionItem>
    <ProfileSection>
      <Avatar margin="15px" />
      <UserInfo>
        <Name>User name</Name>
        <Email>admin@gmail.com</Email>
      </UserInfo>
    </ProfileSection>
  </ActionsMenuWrapper>
);

export default ActionsMenu;
