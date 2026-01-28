import { ThemeContext } from "../../../shared/lib/theme/ThemeContext"
import { useState, type ReactNode } from "react"
import { Theme } from "../../../shared/lib/theme/ThemeContext.type"


interface ThemeProviderProps{
  children: ReactNode,
  initialTheme?:Theme
  }

const userTheme = (localStorage.getItem('grymzaTheme'))as Theme||Theme.LIGHT

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme||userTheme)
  console.log(userTheme)
return(
<ThemeContext.Provider value={{theme,setTheme
  
}}>
{children}
</ThemeContext.Provider>
)
}