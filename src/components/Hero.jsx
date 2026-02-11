import Header from './Header'
import Input from './Input'
import Button from './Button'
import HeroImage from './HeroImage'
import TodoList from './TodoList'
import { useState } from 'react'
import { todoContext } from '../context/todoContext'

const Hero = () => {

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  ) 
  const [value, setValue] = useState('')  
  const [filter, setFilter] = useState('All')
  
  const inputHandler = (e)=>{
    setValue(e.target.value)
  }

  const addHandler = () =>{
    if (!value.trim()) return
    const newTodos = [...todos, { value, isCompleted: false }]
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setValue('')
  }

  const actions ={
    todos, setFilter, setValue, setTodos
  }

  return (
    <todoContext.Provider value={actions}> 
      <div className='m-auto flex items-center justify-center flex-col min-h-[88vh]'>
        <Header />
        <div className='md:flex w-3/4 md:w-1/3 gap-5'>
          <Input onChange={(e)=>{inputHandler(e)}} value={value}/>
          <Button onClick={addHandler}/>
        </div>
        {todos.length === 0 ? <HeroImage /> : <TodoList  todos={todos} filter={filter}/> }
      </div>
    </todoContext.Provider>
  )
}

export default Hero