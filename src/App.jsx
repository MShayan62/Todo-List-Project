import 'remixicon/fonts/remixicon.css'
import Sidebar from './components/Sidebar/Sidebar'
import ThemeChanger from './components/ThemeChanger'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])


  return (
      <div className='bg-linear-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950  dark:text-white transition-colors duration-400 
      ease-in-out relative min-h-screen font-display '>  
        <Sidebar />
        <ThemeChanger theme={theme} setTheme={setTheme} />
        <Hero />
        <Footer />  
      </div>
  )
}

export default App