import { useState } from 'react'
import SidebarBtn from './SidebarBtn'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => {
    setOpen(prev => !prev)
  }

  return (
    <div
      className={`md:h-screen h-12  bg-white dark:bg-gray-800 text-black dark:text-white  shadow-2xl fixed bottom-0 md:left-0 md:top-0
      flex md:flex-col py-3 gap-3 transition-all duration-400 justify-evenly md:justify-normal z-40
      ${open ? 'md:w-56 w-full px-7' : 'md:w-20 w-full px-7 '}`}
    >
      <SidebarBtn
        icon="ri-menu-fill"
        label="Toggle SideBar"
        open={open}
        onClick={toggleSidebar}
      />

      <span className="md:border-b border-gray-300 hidden md:block px-0"></span>

      <SidebarBtn
        icon="ri-list-check-3"
        label="My Tasks"
        open={open}
      />

      <SidebarBtn
        icon="ri-settings-3-line"
        label="Settings"
        open={open}
      />
    </div>
  )
}

export default Sidebar
