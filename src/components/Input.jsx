
const Input = ({ onChange, value}) => {

  return (
    <input type="text" 
    onChange={onChange}
    name="Todo"
    value={value} 
    className='focus:outline-0 bg-white dark:text-black text-black rounded-md px-3 py-2 w-full border-b border-b-gray-300 shadow-xl' 
    placeholder='Type your task here..'/>
  )
}

export default Input