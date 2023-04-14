import React, { useState } from "react";
import ReportImg from "../../assets/report.png"

function Main() {
  let count = 0
  const [outputImg, setOutputImg] = useState();
  const loadFile = (e) => {
    setOutputImg(URL.createObjectURL(e.target.files[count]))
    count += 1;
  }
  return (
    <>
      <div className="overflow-x-hidden max-w-full">
        <img src={ReportImg} alt="" className="absolute -z-10 sm:w-96 w-64 top-0 right-0" />
        <input
          type="file"
          accept="image/*"
          name="picture"
          id="file"
          capture="user"
          onChange={loadFile}
          style={{ display: "none" }}
        ></input>

        <h1 className="sm:text-4xl text-2xl font-bold px-4 py-4">Report an Animal</h1>
        <p className="text-lg text-blue-600 font-bold px-4 py-4 opacity-60">"Spot an animal in need? Snap a photo & report details. Our team will <br />provide care. Thank you!"</p>

        <label for="file" className=" mx-4 px-4 py-2 h-11 border-[2px] rounded-xl border-[#61b3ff] hover:bg-[#61b3ff] transition-all">Upload Image</label>

        {outputImg && <img id="output" src={outputImg} width="400" className="border-[2px] border-blue-500 rounded-lg px-4 py-4 my-4 mx-4 inline-block" />}

        <input type="text" placeholder="Please describe any visible symptoms or injuries" className="border-[2px] border-[#ccc] rounded-md block px-4 py-4 mx-auto sm:mx-4 my-4 w-96 drop-shadow-md transition-all duration-300 focus:placeholder-opacity-25 focus:outline-none focus:border-[#7da5c9] bg-transparent placeholder-gray-500" />

        <textarea id="textarea" placeholder="Please describe the animal's location and condition..."
          className="border-[2px] border-[#ccc] rounded-md block px-4 py-4 mx-auto sm:mx-4 my-4 resize-none h-28 w-96 drop-shadow-md transition-all duration-300 focus:outline-none focus:placeholder-opacity-25 focus:border-[#7da5c9] bg-transparent placeholder-gray-500"></textarea>

<input
  type="submit"
  value="Send Report"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 my-4 cursor-pointer"
/>
      </div>
    </>
  );
}

export default Main;
