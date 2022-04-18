import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";

export const AVATAR_DEFAULT_SIZE = 36;

export const AvatarWrapper = styled.figure`
  width: ${prop("width", AVATAR_DEFAULT_SIZE)}px;
  height: ${prop("width", AVATAR_DEFAULT_SIZE)}px;
  border-radius: 100%;
  overflow: hidden;
  color: ${prop("textColor", "#fff")};
  background-color: ${prop("backgroundColor", "#ccc")};
  margin: ${prop("margin", "0")};
  ${ifProp(
    "innerText",
    css`
      padding: 11px;
      font-size: 14px;
    `
  )}

  ${ifProp(
    "inlineBlock",
    css`
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    `
  )}

  & > img {
    width: ${prop("width", AVATAR_DEFAULT_SIZE)}px;
  }
`;
