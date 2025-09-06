import React, { createContext, useContext } from 'react'


const ThemeContext = createContext();

function Child(){
    const theme = useContext(ThemeContext);  //access value directly
    return(
        <h1>current theme: {theme}</h1>
    )
}

export default function ContextHook  ()  {
  return (
    <div>
      <ThemeContext.Provider value="dark">
        <Child/>
      </ThemeContext.Provider>
    </div>
  )
}

