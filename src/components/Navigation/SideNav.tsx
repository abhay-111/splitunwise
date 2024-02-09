import { NavListItems } from "./NavItems";
interface navItem {
  text: string;
  iconUrl: string;
  to: string;
  isActive?: boolean;
}
export const SideDrawer = () => {
  const navItems: navItem[] = [
    {
      text: "Dashboard",
      to: "/dashboard",
      iconUrl:
        "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685698423/w73wd1q8tvrhs3lpwssm.svg",
      isActive: true,
    },
    {
      text: "Montly Expenses",
      to: "/personal-expense",
      iconUrl:
        "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685698423/tbwjjumljilravljxfkh.svg",
      isActive: false,
    },
    // {
    //   text: "Daily Expenses",
    //   to:'/daily-expense',
    //   iconUrl:
    //     "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685698423/tbwjjumljilravljxfkh.svg",
    //   isActive: false,
    // },
  ];
  return (
    <section className="h-full  min-w-[280px]   hidden md:flex flex-col justify-between bg-black rounded-[30px] py-[60px] pl-[50px]">
      <div className="h-full w-full flex flex-col gap-[60px]">
        <p className="text-[36px] leading-[44px] font-bold text-white font-montserrat">
          Board.
        </p>

        <ul className="flex flex-col gap-[40px]">
          {navItems.map((item: navItem, index: number) => {
            return (
              <NavListItems
                key={index}
                index={index + 1}
                text={item.text}
                to={item.to}
                iconUrl={item.iconUrl}></NavListItems>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-[20px] text-white">
        <p className="text-[14px] leading-[17px]">Help</p>
        <p className="text-[14px] font-[400] leading-[17px]">Contact Us</p>
      </div>
    </section>
  );
};
