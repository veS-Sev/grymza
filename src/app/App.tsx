
import { useContext } from 'react'
import './styles/index.scss'
import { ThemeContext } from '../shared/lib/theme/ThemeContext'
import { classNames } from '../shared/lib/classNames/classNames'
import { ThemeSwitcher } from '../features/ThemeSwitcher/ThemeSwitcher'
import type { ThemeContextProps } from '../shared/lib/theme/ThemeContext.type'




function App() {
  const {theme}=useContext<ThemeContextProps>(ThemeContext)
  return (
    <div className={classNames('app',[theme],{})}>
      <h1>Vite + React</h1>
      <span></span>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  )
}

export default App
