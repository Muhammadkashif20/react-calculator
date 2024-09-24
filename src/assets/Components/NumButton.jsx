import React from 'react'

const NumButton = ({numProp}) => {
  return (
    <div>
          <button className="bg-gray-700 text-white w-16 p-4 rounded-lg hover:bg-gray-600 transition duration-200">{numProp}</button>
    </div>
  )
}

export default NumButton
