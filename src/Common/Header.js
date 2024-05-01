import React from "react"

import fabitsLogo from "../images/headerImages/fabitsLogo.svg"
import account from "../images/headerImages/account.svg"
import hamburger from "../images/headerImages/hamburger.svg"
import notifications from "../images/headerImages/notifications.svg"

const Header = () => {
  return (
    <div className="bg-[#f6f9fe] shadow-sm">
      <div className="p-[16px] h-[68px] flex items-center justify-between opacity-35 ">
        <div className="leftItems flex items-center justify-center gap-4">
          <img className="w-[24px] h-[24px]" src={hamburger} alt="hamburger" />
          <img
            className="w-full h-[24px]"
            src={fabitsLogo}
            alt="fabitsLogo"
          />
        </div>
        <div className="rightItems flex items-center justify-center gap-4">
          <img
            className="w-[24px] h-[24px]"
            src={notifications}
            alt="notifications"
          />
          <img className="w-[24px] h-[24px]" src={account} alt="account" />
        </div>
      </div>
    </div>
  )
}

export default Header
