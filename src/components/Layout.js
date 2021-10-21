import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
import { useState } from "react"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebarHandler={toggleSidebarHandler} />
      <Sidebar isOpen={isOpen} toggleSidebarHandler={toggleSidebarHandler} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
