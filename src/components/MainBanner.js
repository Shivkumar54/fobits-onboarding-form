import React, { useEffect, useState } from "react"
import BannerImage from "./BannerImage"
import CloseItem from "../Common/CloseItem"
import { textsforpages } from "../data/headingData"
import { subHeadingData } from "../data/subHeadingData"

const MainBanner = ({ page, setPage }) => {
  const [show, setShow] = useState(true)

  const handlePageChange = () => {
    setPage((prevpage) => prevpage + 1)
  }
  const handleChangePrev = () => {
    setPage((prevpage) => prevpage - 1)
  }

  const data = textsforpages.filter((item) => item.pageNumber === page)
  const secondData = subHeadingData.filter((item) => item.pageNumber === page)
  console.log()

  const handleClose = () => {
    setShow((prev) => !prev)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (page === 3) {
        setPage((page) => page + 1)
      }
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [page])

  return (
    <div className="h-full ">
      {show && (
        <div className="">
          <div className="close newStyle absolute z-50 w-full items-center ">
            <CloseItem show={show} handleClose={handleClose} />
          </div>
          <br />
          <br />
          <BannerImage
            pages={page}
            title={data[0]?.title}
            subititle={data[0]?.subtitle}
            secondData={secondData[0]?.title}
            pageLimit={2}
            handlePageChange={handlePageChange}
            handleChangePrev={handleChangePrev}
          />
        </div>
      )}
      {!show && (
        <div className="close newStyle fixed bottom-0 w-full z-40 mb-5 ">
          <CloseItem show={show} handleClose={handleClose} />
        </div>
      )}
    </div>
  )
}

export default MainBanner
