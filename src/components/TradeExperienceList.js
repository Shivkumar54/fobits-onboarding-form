import React from "react"

const TradeExperienceList = ({ data, handleSelect }) => {
  const selectedItem = {
    backgroundColor: "#f5f8cc]",
    border: "2px solid #83a720",
    textColor: "white",
  }
  const handleClick = () => {
    handleSelect(data?.id)
  }
  return (
    <div className="my-4">
      <ul
        className="py-3 rounded-lg px-3 text-center"
        style={data.isSelected ? selectedItem : null}
        onClick={handleClick}
      >
        <li className="text-lg font-semibold mb-1">{data.title}</li>
        <li className="text-xs uppercase">{data?.subtitle}</li>
      </ul>
    </div>
  )
}

export default TradeExperienceList
