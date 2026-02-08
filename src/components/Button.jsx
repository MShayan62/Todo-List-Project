
const Button = ({ onClick }) => {
  return (
    <button className='bg-black dark:bg-white dark:text-black cursor-pointer active:scale-95 hover:bg-gray-900 transition-colors 
    duration-400 ease-in-out rounded-md text-white px-6 py-2
     mt-3 md:mt-0 md:w-fit w-full'
     onClick={onClick}>
      <i className="ri-add-line pr-2"></i>
      Add
    </button>
  )
}

export default Button