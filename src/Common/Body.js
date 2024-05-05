import React from "react"
import MobileScreen from "./MobileScreen"
import { useMediaQuery } from "react-responsive"
import DesktopScreen from "./DesktopScreen"
const Body = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return <div>{isMobile ? <MobileScreen /> : <DesktopScreen />}</div>
}

export default Body
