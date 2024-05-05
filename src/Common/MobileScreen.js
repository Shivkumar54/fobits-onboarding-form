import React from "react"
import MobileStatusBar from "./MobileStatusBar"
import Header from "./Header"
import Main from "../components/Main"

const MobileScreen = () => {
  return (
    <div>
      <MobileStatusBar />
      <Header />
      <Main />
    </div>
  )
}

export default MobileScreen
