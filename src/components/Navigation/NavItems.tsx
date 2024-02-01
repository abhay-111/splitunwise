import React from 'react'
import { useNavigate } from 'react-router-dom'
interface navItemProps {
    text : string,
    iconUrl : string,
  isActive?: boolean,
  to:string,
    index: number
}
export const NavListItems = ({ text, iconUrl,to, index }: navItemProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(to)
  }
  return (
    <li onClick={handleClick}  className="flex items-center gap-[20px] w-full cursor-pointer">
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
