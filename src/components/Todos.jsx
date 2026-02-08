import { useContext } from "react"
import { todoContext } from "../context/todoContext"

const Todos = ({todos}) => {

    const { setTodos, setValue } = useContext(todoContext)

    const toggleTodo = (index) => {
        const updated = todos.map((todo, i) =>
            i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
        setTodos(updated)
        localStorage.setItem("todos", JSON.stringify(updated))
    }

    const deleteTodo = (index) => {
        const updated = todos.filter((_, i) => i !== index)
        setTodos(updated)
        localStorage.setItem("todos", JSON.stringify(updated))
    }

    const editTodo = (elem, index) => {
        const updated = todos.filter((_, i) => i !== index)
        setValue(elem.value)
        setTodos(updated)
        localStorage.setItem("todos", JSON.stringify(updated))
    }
    

  return (
    <>
    {todos.map((elem, idx)=>(
        <div key={idx} className='bg-white dark:bg-gray-700 rounded-lg px-4 md:py-4 py-3 w-full border-b  transition-colors duration-400 ease-in-out
         border-b-gray-300 dark:border-b-gray-800 shadow-lg flex justify-between items-center mb-2'>
                <div className='flex md:gap-8 gap-3 text-sm md:text-md items-center'>
                    <i className={`md:text-xl text-lg cursor-pointer transition-all duration-400 active:scale-90
                    ${elem.isCompleted ? 'ri-checkbox-fill scale-110 text-green-500' : 'ri-checkbox-blank-line scale-100 text-gray-400'}`}
                    onClick={() => toggleTodo(idx)}></i>
                    <p className={` transition-all duration-400 wrap-anywhere
                        ${elem.isCompleted? 'line-through text-gray-400 opacity-90': 'opacity-100'}`}
                        >{elem.value}</p>
                </div>
                
            <div className='flex gap-2 md:gap-5 text-xl md:pl-5 pl-2'>
                <i onClick={()=>{editTodo(elem, idx)}} className="ri-pencil-line"></i>
                <i onClick={()=>{deleteTodo( idx)}} className="ri-delete-bin-7-line"></i>
            </div>
        </div>
    ))}
    </>
  )
}

export default Todos