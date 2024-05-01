import React from "react"
import { IoIosCloseCircle } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

const CloseItem = ({ show, handleClose }) => {
  return (
    <div className="flex items-end justify-center ">
      {show ? (
        <IoIosCloseCircle size={40} onClick={handleClose} />
      ) : (
        <IoIosArrowUp size={40} onClick={handleClose} />
      )}
    </div>
  )
}

export default CloseItem
