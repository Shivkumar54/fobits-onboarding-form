import React from "react"

const VeriedDetails = ({ data }) => {
  return (
    <div className="bg-white shadow-lg my-4 w-full h-[150px] px-4 pt-5 rounded-lg">
      <div className="flex gap-4">
        <img src={data.img} alt="dataimage" className="w-12" />
        <div className="text">
          <h1 className="text-2xl font-extrabold">{data?.idNumber}</h1>
          <h1 className="text-md uppercase">{data?.name}</h1>
        </div>
      </div>
      <div className="fteched mt-2 flex gap-10">
        <div className="left">
          <h5 className="m-0">{data.labelTitletwo}</h5>
          <h2 className="text-lg uppercase font-extrabold">{data.fetchedby}</h2>
        </div>
        <div className="right">
          <h5 className="m-0">{data.labelTitleone}</h5>
          <h2 className="text-lg uppercase font-extrabold">
            {data.lastupdated}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default VeriedDetails
