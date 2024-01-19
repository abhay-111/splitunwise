import './App.css'
import { TopNavigation } from './components/Dashboard/TopNavigation'
import UserDashBoard from './components/Dashboard/UserDashBoard'
import { SideDrawer } from './components/Navigation/SideNav'
function App() {

  return (
    <>
    <section className='p-[40px] bg-[#f5f5f5] flex gap-[40px] h-screen'>
     <SideDrawer></SideDrawer>
     <div className='w-full p-[20px] leading-7 flex flex-col gap-[40px]'>
      <TopNavigation></TopNavigation>
        <UserDashBoard/>
     </div>
    </section>
    </>
  )
}

export default App
