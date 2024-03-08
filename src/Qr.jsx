import React, { useState } from "react";

const Qr = () => {
  const [name, Name] = useState("Youtube");
  const [formate, Formate] = useState("png");
  const [img, Img] = useState("OIP.jpeg");
  const [load, Load] = useState(false);
  const [qrsize, Qrsize] = useState(200);
  const [qrdata, Qrdata] = useState("https://www.youtube.com//");
  async function Generator() {
    Load(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(
        qrdata
      )}`;
      Img(url);
    } catch (error) {
      console.log("Qr Generate Error", error);
    } finally {
      Load(false);
    }
  }
  function Download() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const doc = document.createElement("a");
        doc.href = URL.createObjectURL(blob);
        doc.download = `${name}.${formate}`;
        document.body.appendChild(doc);
        doc.click();
        document.body.removeChild(doc);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div id="qr_div">
        <h1 id="Head">QR-Code Generator</h1>
        {load && <p id="plz">Please Wait !...</p>}
        <img src={img} alt="" />
        <form id="f">
          <label htmlFor="url" id="lab">
            Type Url{" "}
          </label>
          <input
            type="text"
            id="url"
            placeholder="https://www.youtube.com/"
            onChange={(e) => Qrdata(e.target.value)}
          />

          <label htmlFor="name" id="lab">
            File name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Youtube"
            onChange={(e) => Name(e.target.value)}
          />

          <label htmlFor="format" id="lab">
            Download formate
          </label>
          <input
            type="text"
            id="format"
            placeholder="png"
            onChange={(e) => Formate(e.target.value)}
          />

          <label htmlFor="size" id="lab">
            Size
          </label>
          <input
            type="text"
            id="size"
            placeholder="200"
            onChange={(e) => Qrsize(e.target.value)}
          />
        </form>
        <div id="but">
          <button onClick={Generator} id="G" disabled={load}>
            Generate Qr
          </button>
          <button onClick={Download} id="D" disabled={load}>
            Download
          </button>
        </div>
        <p id="footer">
          Developed by <a href="mailto:rsingam464@gmail.com">Rajasingam</a>
        </p>
      </div>
    </>
  );
};

export default Qr;
