import React from 'react'
interface navItemProps {
    text : string,
    iconUrl : string,
    isActive ?: boolean,
    index: number
}
export const NavListItems = ({text,iconUrl,index}:navItemProps) => {
  return (
    <li  className="flex items-center gap-[20px] w-full cursor-pointer">
      <img src={iconUrl} className="h-[18px] w-[18px]" alt="" />
      <p
        className={
          "text-white md:text-[18px] text-[14px] leading-[22px] font-montserrat " +
          (1 === index ? "font-bold" : "font-[300]")
        }
      >
        {text}
      </p>
    </li>
  );
}
