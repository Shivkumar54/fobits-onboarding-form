import React from "react"

const TradeExperienceList = ({ data }) => {
  // bg-[#f5f8cc] outline outline-2 outline-[#83a720] h-[48px] rounded-lg text-xl font-medium text-[#83a720] flex items-center justify-center px-4

  const selectedItem = {
    backgroundColor: "#f5f8cc]",
    border: "2px solid #83a720",
    textColor: "white",
  }
  return (
    <div className="my-4">
      <ul
        className="py-3 rounded-lg px-3 text-center"
        style={data.isSelected ? selectedItem : null}
      >
        <li className="text-lg font-semibold mb-1">{data.title}</li>
        <li className="text-xs uppercase">{data?.subtitle}</li>
      </ul>
    </div>
  )
}

export default TradeExperienceList
