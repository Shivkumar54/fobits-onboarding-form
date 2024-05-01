import React from "react"
import statusbar from "../images/Statusbar.svg"
const MobileStatusBar = () => {
  const date = new Date()
  const currentMin = date.getMinutes()
  const currentHr = date.getHours()
  return (
    <div className="flex h-[48px] px-[16px] justify-between items-center opacity-35 bg-white">
      <span className="font-semibold">
        {currentHr}:{currentMin}
      </span>
      <img src={statusbar} alt="" />
    </div>
  )
}

export default MobileStatusBar
