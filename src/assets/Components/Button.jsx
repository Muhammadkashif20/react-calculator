import React from 'react'

const Button = ({prop}) => {
  return (
    <div>
    <button className="bg-gray-600 text-white w-16 p-4 rounded-lg hover:bg-gray-500 transition duration-200 ">{prop}</button>
    </div>
  )
}

export default Button
