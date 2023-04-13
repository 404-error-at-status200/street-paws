import React, { useState } from "react";

function Main() {
  let count = 0
  const [outputImg, setOutputImg] = useState();
  const loadFile = (e) => {
    setOutputImg(URL.createObjectURL(e.target.files[count]))
    count+=1;
  }
  return (
    <>
      <input
        type="file"
        accept="image/*"
        name="picture"
        id="file"
        capture="user"
        onChange={loadFile}
        style={{display: "none"}}
      ></input>
      <label for="file" >Upload Image</label>
      {outputImg && <img id="output" src={outputImg} width="200" />}
    </>
  );
}

export default Main;
