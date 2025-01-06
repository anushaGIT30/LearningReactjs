
import { useState } from 'react'
import './App.css'

import { createContext } from 'react'
import ChildA from './Components/ChildA';
const ThemeContext = createContext();
const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id='container' style={{ backgroundColor: theme == 'light' ? 'beige' : "green" }}>
          <ChildA />
        </div>

      </ThemeContext.Provider>
    </>
  )
}

export default App
export { ThemeContext };
