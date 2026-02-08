import { useContext } from "react"
import { todoContext } from "../context/todoContext"


const TodoNav = ({filter, activeCount}) => {
    
    const {setFilter} = useContext(todoContext)

    const tabs = ['All', 'Active', 'Completed']

  return (
    <div className="flex justify-between  md:text-[0.8rem] text-[0.7rem] text-gray-700 dark:text-gray-400 transition-colors duration-400 my-5 ">
        <div className="flex gap-2 md:gap-5 items-center">
            {tabs.map(tab => (
            <span
                key={tab}
                onClick={() => setFilter(tab)}
                className={`cursor-pointer ${filter === tab ? 'font-semibold transition-colors duration-400 text-black dark:text-white' : ''}`}
            >
                {tab}
            </span>
            ))}
        </div> 
        <span>{activeCount} Tasks left</span>
    </div>
  )
}

export default TodoNav