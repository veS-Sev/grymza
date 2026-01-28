import type { ReactNode } from "react"
import { createPortal } from "react-dom"



interface PortalProps{
  children: ReactNode,
  mountNode?: HTMLElement
  }


export const Portal = ({ children, mountNode }: PortalProps) => {
  
return createPortal(children, mountNode=document.body)
}