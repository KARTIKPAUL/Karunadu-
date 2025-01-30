import React from 'react'

const HeaderTitle = ({Heading, SubHeading}) => {
  return (
    <>
    <div className="bg-customBlue1 py-10 mx-auto px-6 sm:px-10 lg:px-16">
      <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#ffcc00]">
              {Heading}
            </h1>
            <p className="mt-3 text-gray-100 text-lg max-w-3xl text-center mx-auto">
              {SubHeading}
            </p>
          </div> </div>
    </>
  )
}

export default HeaderTitle
