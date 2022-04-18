import React from "react";
import Image from "next/image";
import avatarUrl from "../../public/assets/images/avatar_default.svg";
import { AvatarWrapper, AVATAR_DEFAULT_SIZE } from "./Avatar.styles";

interface AvatarProps {
  width?: number;
  innerText?: string;
  textColor?: string;
  backgroundColor?: string;
  inlineBlock?: boolean;
  margin?: string;
  imageSrc?: string;
}

const Avatar = ({ innerText, imageSrc, ...rest }: AvatarProps) => {
  const image = imageSrc || avatarUrl;
  return innerText ? (
    <AvatarWrapper {...rest} innerText={innerText}>
      {innerText}
    </AvatarWrapper>
  ) : (
    <AvatarWrapper {...rest}>
      <Image
        width={AVATAR_DEFAULT_SIZE}
        height={AVATAR_DEFAULT_SIZE}
        src={image}
        alt="Avatar"
        {...rest}
      />
    </AvatarWrapper>
  );
};

export default Avatar;
