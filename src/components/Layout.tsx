import { ReactElement } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}