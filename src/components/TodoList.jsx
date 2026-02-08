import TodoNav from "./TodoNav"
import Todos from './Todos'

const TodoList = ({ todos, filter, setFilter}) => { 
    const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.isCompleted
    if (filter === 'Completed') return todo.isCompleted
    return true
  })

  const activeCount = todos.filter(todo => !todo.isCompleted).length
    
  return (
    <div className="md:w-1/3 w-3/4">
        <TodoNav filter={filter} setFilter={setFilter} activeCount={activeCount}/>
        <div className="md:h-[53vh] md:pb-0 pb-12 md:overflow-auto pr-2">
        <Todos todos={filteredTodos}/>
        </div>
    </div>
  )
}

export default TodoList