import { useState, type ReactNode } from "react";
import { classNames, type Mods } from "../../../lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { Overlay } from "../../Overlay/index";
import { Portal } from "../../Portal";
import { useTheme } from "../../../lib/theme/useTheme/useTheme";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpenModal: boolean;
  closeModal: () => void;
}

export const Modal = (props: ModalProps) => {
  const { children, className, isOpenModal, closeModal } = props;
const {theme}=useTheme()
  const close = () => {
    closeModal();
  };
  const mods: Mods = {
    [cls.open]: isOpenModal,

  }
  console.log('222',isOpenModal)
  return (
    <Portal>
      <div className={classNames(cls.Modal, [className,theme], mods)}>
        <Overlay
          onClick={close}
        />
        <div className={classNames(cls.content)}>{children}</div>
      </div>
    </Portal>
  );
};
