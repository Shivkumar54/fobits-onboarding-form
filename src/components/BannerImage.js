import React, { useEffect, useState } from "react"
import mainbackground from "../images/mainImages/mainbackground.svg"
import car from "../images/mainImages/car.json"
import Lottie from "lottie-react"
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import { tradingData } from "../data/tradeExperience"
import TradeExperienceList from "./TradeExperienceList"
import VerifyDetails from "./VerifyDetails"
import { verifyData } from "../data/verifyData"
import VeriedDetails from "./VeriedDetails"
import { fetchedDetails } from "../data/fetchedDetails"
import { Link } from "react-router-dom"
const BannerImage = ({
  pages,
  title,
  subititle,
  secondData,
  pageLimit,
  handlePageChange,
  handleChangePrev,
}) => {
  const [showCar, setShowCar] = useState(false)
  const linkedinLink = `https://www.linkedin.com/in/shivkumar-m-a7a49b205/`

  const showCarAfterDelay = () => {
    setTimeout(() => {
      setShowCar(true)
    }, 8000)
  }

  useEffect(() => {
    showCarAfterDelay()
  }, [])

  return (
    <div className="bottom-0 overflow-hidden">
      <div className="w-full h-full relative">
        <div
          className="imager relative"
          style={{ filter: pages === 4 ? "blur(8px)" : "none" }}
        >
          {showCar && pages !== 4 && (
            <Lottie
              className="car-animation w-44 absolute z-40 left-70"
              animationData={car}
              loop={true}
            />
          )}
          <img
            className="w-full  h-full object-cover rounded-t-[40px]"
            src={mainbackground}
            alt="Main Background"
          />
        </div>
        <div className="absolute top-12 left-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{subititle}</p>
        </div>
        <div className="div bg-gradient-to-b h-auto pb-4 from-[#ebeb7c] to-[#ffffdb] px-4">
          {pages <= 2 && (
            <>
              <div className="flex items-center gap-6 justify-between">
                <h1 className="text-lg font-bold w-80">{secondData}</h1>
                <h6 className="w-16 bg-black text-white text-center text-xs py-2 rounded-3xl">
                  {pages} / {pageLimit}
                </h6>
              </div>
              <div className="lists flex items-center justify-around">
                {pages === 1 &&
                  tradingData.map((item) => {
                    return <TradeExperienceList key={item?.id} data={item} />
                  })}
              </div>
              <div className="verify w-full">
                {pages === 2 && (
                  <>
                    <h1 className="mt-4 ">Verification method</h1>
                    <div className="flex flex-wrap w-full items-center justify-around ">
                      {verifyData.map((item) => {
                        return <VerifyDetails key={item?.id} data={item} />
                      })}
                    </div>
                  </>
                )}
              </div>
              {pages === 1 ? (
                <button
                  onClick={handlePageChange}
                  className="w-full bg-[#83a720] py-3 text-white text-lg rounded-lg my-3 flex justify-between px-4"
                >
                  Next <IoIosArrowRoundForward size={25} />
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={handleChangePrev}
                    className="w-[20%] outline outline-2 outline-[#83a720] py-2 text-[#83a720] text-lg rounded-lg my-3 flex justify-between px-2"
                  >
                    <IoIosArrowRoundBack size={35} />
                  </button>
                  <button
                    onClick={handlePageChange}
                    className="w-full bg-[#83a720] py-3 text-white text-lg rounded-lg my-3 flex justify-between px-4"
                  >
                    Complete <IoIosArrowRoundForward size={30} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {pages === 4 && (
        <div className="absolute z-40 top-36 w-full flex flex-col items-center justify-center">
          <div className="w-96">
            {fetchedDetails?.map((item) => {
              return (
                <Link key={item?.id} target="_blank" to={linkedinLink}>
                  <VeriedDetails data={item} />
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default BannerImage
