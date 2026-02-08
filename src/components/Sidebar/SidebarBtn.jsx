const SidebarBtn = ({ icon, label, open, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-md font-semibold flex items-center gap-4 whitespace-nowrap"
    >
      <i className={`${icon} text-2xl`}></i>

      <span
        className={`transition-all duration-400 overflow-hidden md:block hidden
        md:(${open ? 'opacity-100 w-auto' : 'opacity-0 w-0'})`}
      >
        {label}
      </span>
    </button>
  )
}

export default SidebarBtn
