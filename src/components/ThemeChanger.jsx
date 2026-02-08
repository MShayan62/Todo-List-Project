const ThemeChanger = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div
      onClick={toggleTheme}
      className="absolute right-6 top-5 text-3xl cursor-pointer w-8 h-8"
    >
      <i className={`ri-moon-line absolute inset-0 transition-opacity duration-400 
         ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}></i>

      <i className={`ri-sun-line absolute inset-0 transition-opacity duration-400
         ${ theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
      ></i>
    </div>
  )
}

export default ThemeChanger
