import React, { useState } from "react"
import CommonGlance from "../Common/CommonGlance"
import MainBanner from "./MainBanner"

const Main = () => {
  const [page, setPage] = useState(1)

  const renderMainBanner = () => {
    let bannerStyle = ""
    switch (page) {
      case 1:
      case 2:
        bannerStyle = "top-1/4"
        break
      case 3:
        bannerStyle = "top-1/2"
        break
      default:
        bannerStyle = "top-16"
        break
    }
    return (
      <div className={`absolute newStyle z-30 w-full ${bannerStyle}`}>
        <MainBanner page={page} setPage={setPage} />
      </div>
    )
  }

  return (
    <div className="">
      <div className="relative">
        <CommonGlance />
      </div>
      {renderMainBanner()}
    </div>
  )
}

export default Main
