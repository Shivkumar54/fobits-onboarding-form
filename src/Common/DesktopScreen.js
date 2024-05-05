import React from "react"
import notfound from "../images/notfound.svg"
import fabitsLogo from "../images/headerImages/fabitsLogo.svg"
const DesktopScreen = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <img src={notfound} alt="notfound" className=" h-60 mb-8" />
      <h1 className="text-3xl font-extrabold opacity-70">
        Oops ! Looks like you're in desktop screen
      </h1>
      <p className="mt-2 mb-6 opacity-70">
        This page is build for smaller screen please view in mobile{" "}
      </p>

      <img src={fabitsLogo} alt="fabitsLogo" className="opacity-50" />
      <span>team</span>
    </div>
  )
}

export default DesktopScreen
