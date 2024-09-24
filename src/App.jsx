import React from "react";
import Button from "./assets/Components/Button";
import SpButton from "./assets/Components/SpButton";
import NumButton from "./assets/Components/numButton";
import { useState } from "react";
function App() {
  return (
    const [value,setValue]=useState('');
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-96">
        {/* Display Area */}
        <div className="text-right text-white text-4xl mb-4 bg-gray-700 p-4 rounded-lg border border-gray-600">
          0
        </div>
        <div className="grid grid-cols-4 gap-5">
          <Button prop={"AC"} />
          <Button prop={"+/-"} />
          <Button prop={"%"} />
          <SpButton spProp={"/"} />
          <NumButton numProp={"7"} />
          <NumButton numProp={"8"} />
          <NumButton numProp={"9"} />
          <SpButton spProp={"*"} />
          <NumButton numProp={"4"} />
          <NumButton numProp={"5"} />
          <NumButton numProp={"6"} />
          <SpButton spProp={"-"} />
          <NumButton numProp={"1"} />
          <NumButton numProp={"2"} />
          <NumButton numProp={"3"} />
          <SpButton spProp={"+"} />
          <button className="bg-gray-700 col-span-2 text-white p-4 rounded-lg  hover:bg-gray-600 transition duration-200">
            0
          </button>
          <NumButton numProp={"."} />
          <SpButton spProp={"="} />
        </div>
      </div>
    </div>
  );
}

export default App;
