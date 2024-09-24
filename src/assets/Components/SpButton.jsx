import React from 'react'

const SpButton = ({spProp}) => {
  return (
    <div>
        <button className="bg-orange-600 text-white w-16 p-4 rounded-lg hover:bg-orange-500 transition duration-200">{spProp}</button>
    </div>
  )
}

export default SpButton
