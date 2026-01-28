
import { useContext, useState } from 'react'
import './styles/index.scss'
import { ThemeContext } from '../shared/lib/theme/ThemeContext'
import { classNames } from '../shared/lib/classNames/classNames'
import { ThemeSwitcher } from '../features/ThemeSwitcher/ThemeSwitcher'
import type { ThemeContextProps } from '../shared/lib/theme/ThemeContext.type'
import { Button } from '../shared/ui/Button'
import { Modal } from '../shared/ui/Modal/ui/Modal'




function App() {
  const { theme } = useContext<ThemeContextProps>(ThemeContext)
  const [isModal, setModal]=useState(false)
  const modalOpen = () => {
    setModal(true)
  }
    const modalClose = () => {
      setModal(false);
    };
  console.log('111',isModal)
  return (
    <div className={classNames("app", [theme], {})}>
      <h1>Vite + React</h1>
      <ThemeSwitcher />
      <div></div>
      <Button onClick={modalOpen}>{"Modal Button"}</Button>
      <Modal className={'app-modal'} isOpenModal={isModal} closeModal={modalClose}></Modal>
    </div>
  );
}

export default App
