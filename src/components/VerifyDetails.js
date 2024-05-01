import React from "react"

const VerifyDetails = ({ data }) => {
  const selectedItemStyle = {
    backgroundColor: "#f5f8cc",
    border: "2px solid #83a720",
    textColor: "white",
  }

  return (
    <div className="my-1">
      <div
        className="py-3 w-full rounded-lg px-7 text-center"
        style={data.isSelected ? selectedItemStyle : null}
      >
        <div className="w-full">
          {data.type === "select" && (
            <div className="text-lg font-semibold mb-1 w-full">
              {data.title}
            </div>
          )}
          {data.type === "input" && (
            <div className=" flex items-center ">
              <label className="uppercase text-md">{data.title}</label>
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
