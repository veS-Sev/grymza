
import { useContext } from "react"
import { Theme, type ThemeContextProps } from "../ThemeContext.type"
import { ThemeContext } from "../ThemeContext";


export const useTheme = () => {
  const { theme, setTheme } = useContext<ThemeContextProps>(ThemeContext);  
  const toggleTheme = () => {
    let nextTheme: Theme
    switch (theme) {
      case Theme.LIGHT:
        nextTheme = Theme.MEDIUM;
        break;
      case Theme.MEDIUM:
        nextTheme = Theme.DARK;
        break;
      case Theme.DARK:
        nextTheme = Theme.LIGHT;
        break;
      default:
        nextTheme = Theme.LIGHT;
    }
    if (setTheme) { setTheme(nextTheme) };
    localStorage.setItem("grymzaTheme", `${nextTheme}`);
  }
return {theme, toggleTheme}
}