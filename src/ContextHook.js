import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export default function ContextHook  ()  {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Child/>
      </ThemeContext.Provider>
    </div>
  )
}
function Child(){
    return(
        <div>
      <ThemeToggler />
    </div>
    )
}
function ThemeToggler(){
   const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
    </div>
  );
}


