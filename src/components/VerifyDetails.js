import React from "react"

const VerifyDetails = ({ data, onSelect }) => {
  const selectedItemStyle = {
    backgroundColor: "#f5f8cc",
    border: "2px solid #83a720",
    textColor: "white",
  }
  const handleSelect = () => {
    onSelect(data.id)
  }

  return (
    <div className="my-1">
      <div
        className="py-3 w-full rounded-lg text-center"
        style={data.isSelected ? selectedItemStyle : null}
      >
        <div className="w-full">
          {data.type === "select" && (
            <div
              onClick={handleSelect}
              className="text-lg font-semibold mb-1 w-full px-10"
            >
              {data.title}
            </div>
          )}
          {data.type === "input" && (
            <div className=" flex items-center gap-2 justify-between">
              <label className="uppercase text-md font-medium">
                {data.title}
              </label>
              <input
                type="text"
                className="border border-gray-300 bg-transparent outline outline-2 outline-[#83a720] rounded-md px-2 py-3"
                placeholder="POMIS7890D"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerifyDetails
