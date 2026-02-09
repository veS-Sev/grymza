import { useContext, useState } from "react";
import "./styles/index.scss";
import { ThemeContext } from "../shared/lib/theme/ThemeContext";
import { classNames } from "../shared/lib/classNames/classNames";
import { ThemeSwitcher } from "../features/ThemeSwitcher/ThemeSwitcher";
import type { ThemeContextProps } from "../shared/lib/theme/ThemeContext.type";
import { Button } from "../shared/ui/Button";
import { Modal } from "../shared/ui/Modal/ui/Modal";
import { Link, Route, Routes } from "react-router-dom";
import IntroducePage from "../pages/IntroducePage/IntroducePage";
import { MainPage } from "../pages/MainPage/index";
import { PageLayout } from "./layouts/PageLayout";
import { AuthForm } from "../entities/AuthForm/ui/AuthForm";

function App() {
  const { theme } = useContext<ThemeContextProps>(ThemeContext);
  const [isModal, setModal] = useState(false);
  const modalOpen = () => {
    setModal(true);
  };
  const modalClose = () => {
    setModal(false);
  };

  const loginHandler = () => {
    console.log('Let`s login')
}
  return (
    <div className={classNames("app", [theme], {})}>
      <nav>
        <Link to={"/main"}>{"Home"}</Link>
        <Link to={"/introduce"}>{"Introduce"}</Link>
      </nav>
      <h1>Vite + React</h1>
      <ThemeSwitcher />
      <Button onClick={modalOpen}>{"Modal Button"}</Button>
      <Button onClick={loginHandler}>{"Log in"}</Button>
      <AuthForm />
      <Routes>
        <Route path='/pages' element={<PageLayout />}>
          {/*These two pages will be loaded with /pages/namepage path*/}
          <Route path='main' element={<MainPage />}></Route>
          <Route path='introduce' element={<IntroducePage />}></Route>
        </Route>
        <Route path='*' element={<h3>Page not found</h3>}></Route>
      </Routes>
      <Modal
        className={"app-modal"}
        isOpenModal={isModal}
        closeModal={modalClose}
      ></Modal>
    </div>
  );
}

export default App;
