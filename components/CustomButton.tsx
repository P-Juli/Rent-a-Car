"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface customButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1" ${textStyles}`}>{title}</span>
      {rightIcon && <div className="relative w-6 h-6">
        <Image 
        src={rightIcon}
        alt='right icon'
        fill
        className="object-contain"
        />
        </div>}
    </button>
  );
};

export default CustomButton;
