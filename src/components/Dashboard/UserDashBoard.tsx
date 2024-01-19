import { DataCards } from "../common/DataCards";
import { DailyExpenseChart } from "./DailyExpenseChart";
interface Dimension{
    height: number,
    width: number
   } 
interface UserStat {
    bgColor: string,
    iconUrl: string,
    statName: string,
    statValue: string,
    dimensions: Dimension,
}
const UserDashBoard = () => {
    
    const  userStats:UserStat[] = [
        {
          iconUrl:
            "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/dzf9eded4n1fbvkyxgcx.png",
          statName: "Montly Income",
          statValue: "$2,129,430",
          bgColor: "#DDEFE0",
          dimensions: {
            height: 24,
            width: 26,
          },
        },
        {
          iconUrl:
            "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/qsjo2lvu6duko0kwyhn1.png",
          statName: "Monthly Expense",
          statValue: "1,520",
          bgColor: "#F4ECDD",
          dimensions: {
            height: 24,
            width: 20,
          },
        },
        {
          iconUrl:
            "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/vtyiizsirmhvsjikjiss.png",
          statName: "Total Owed",
          statValue: "9,721",
          bgColor: "#EFDADA",
          dimensions: {
            width: 24,
            height: 24,
          },
        },
        {
          iconUrl:
            "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/gaxvkedl59p1vczjhuhw.png",
          statName: "Total Users",
          statValue: "892",
          bgColor: "#DEE0EF",
          dimensions: {
            height: 24,
            width: 36,
          },
        },
      ]
  return (
    <section className="flex flex-col gap-[40px]">
        <div className="w-full  mx-auto flex gap-[36px] min-h-[120px] overflow-x-scroll no-scrollbar">
      {userStats.map((stat,index) => {
        return (
          <DataCards
          key={index}
            statName={stat.statName}
            statValue={stat.statValue}
            bgColor={stat.bgColor}
            iconUrl={stat.iconUrl}
            dimensions={stat.dimensions}
          ></DataCards>
        );
      })}
    </div>
      <DailyExpenseChart></DailyExpenseChart>
    </section>
  );
};

export default UserDashBoard;
