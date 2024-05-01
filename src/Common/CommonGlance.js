import React from "react"

const CommonGlance = () => {
  return (
    <div className="h-[250px] w-full flex justify-center items-start mt-8 px-[16px] relative z-10 opacity-60">
      <div className="glance h-[250px] text-center pt-6 rounded-lg bg-[#f6f9fe] shadow w-full">
        <h5 className="uppercase opacity-50 tracking-wide font-medium pt-3">
          At a glance
        </h5>
        <div className="pt-1 h[64px] ">
          <h6 className="text-[30px] font-black">₹ 3,596.21</h6>
          <h6 className="mt-[0.5px] text-sm">Current Value</h6>
        </div>
      </div>
    </div>
  )
}

export default CommonGlance
