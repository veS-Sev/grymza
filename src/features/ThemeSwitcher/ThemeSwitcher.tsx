import { useTheme } from "../../shared/lib/theme/useTheme/useTheme"
import { Button } from "../../shared/ui/Button"
import cls from "./ThemeSwitcher.module.scss"



export const ThemeSwitcher = () => {
  const { theme,toggleTheme} = useTheme()

  return (
    <Button onClick={toggleTheme}
      className={cls.ThemeSwitcher}>
{theme}
</Button>
)
}