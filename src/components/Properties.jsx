import React, { useState } from "react";
import Buttonss from "./Buttonss";
import "../components/Buttons.css";

import { AiFillBank, AiOutlineHdd, AiTwotoneShop } from "react-icons/ai";
import { PiLighthouse, PiWarehouseBold, PiDoorOpenBold } from "react-icons/pi";

const Properties = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [checked1, setChecked1] = useState("House");
  const [checked2, setChecked2] = useState("Residitional Plot");
  const [checked3, setChecked3] = useState("Office");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const onChange1 = (e) => {
    setChecked1(e.target.value);
  };

  const onChange2 = (e) => {
    setChecked2(e.target.value);
  };

  const onChange3 = (e) => {
    setChecked3(e.target.value);
  };
  return (
    <div className="container">
      <h1 className="ml-4 mt-2 text-3xl w-">Select Purpose Type</h1>

      <div className="buttons">
        <button
          className={`${activeButton === "Home" ? "active-button" : ""} ${activeButton==='Home'? 'font-bold':''}`}
          onClick={() => handleButtonClick("Home")}
        >
          Home
        </button>
        <button
          className={`${activeButton === "Plot" ? "active-button" : ""} ${activeButton==='Plot'? 'font-bold':''}`}
          onClick={() => handleButtonClick("Plot")}
        >
          Plot
        </button>
        <button
          className={`${activeButton === "Commercial" ? "active-button" : ""} ${activeButton==='Commercial'? 'font-bold':''}`}
          onClick={() => handleButtonClick("Commercial")}
        >
          Commercial
        </button>
      </div>

      {activeButton === "Home" && (
        <div>
          <div>
            <div className="flex mb-3">
              <Buttonss
                icon={<AiFillBank />}
                label="House"
                onChange={onChange1}
                value="House"
                checked={checked1 === "House"}
              />
              <Buttonss
                icon={<AiOutlineHdd />}
                label="Flat"
                onChange={onChange1}
                value="Flat"
                checked={checked1 === "Flat"}
              />
              <Buttonss
                icon={<AiTwotoneShop />}
                label="Upper Portion"
                onChange={onChange1}
                value="Upper Portion"
                width="w-44"
                checked={checked1 === "Upper Portion"}
              />
            </div>

            <div className="flex mb-3">
              <Buttonss
                icon={<AiTwotoneShop />}
                label="Lower Portion"
                onChange={onChange1}
                value="Lower Portion"
                width="w-40"
                checked={checked1 === "Lower Portion"}
              />
              <Buttonss
                icon={<PiWarehouseBold />}
                label="Form House"
                onChange={onChange1}
                value="Form House"
                width="w-40"
                checked={checked1 === "Form House"}
              />
              <Buttonss
                icon={<PiDoorOpenBold />}
                label="Room"
                onChange={onChange1}
                value="Room"
                checked={checked1 === "Room"}
              />
            </div>

            <div className="flex mb-3">
              <Buttonss
                icon={<PiLighthouse />}
                label="Penthouse"
                onChange={onChange1}
                value="Penthouse"
                width="w-32"
                checked={checked1 === "Penthouse"}
              />
            </div>
          </div>
        </div>
      )}

      {activeButton === "Plot" && (
        <div>
          <div>
            <div className="flex mb-3">
              <Buttonss
                icon={<AiFillBank />}
                label="Residitional Plot"
                onChange={onChange2}
                value="Residitional Plot"
                width="w-56"
                checked={checked2 === "Residitional Plot"}
              />
              <Buttonss
                icon={<AiOutlineHdd />}
                label="Commercial Plot"
                onChange={onChange2}
                value="Commercial Plot"
                width="w-56"
                checked={checked2 === "Commercial Plot"}
              />
            </div>
            <div className="flex mb-3">
              <Buttonss
                icon={<AiTwotoneShop />}
                label="Agriculture Land"
                onChange={onChange2}
                value="Agriculture Land"
                width="w-48"
                checked={checked2 === "Agriculture Land"}
              />

              <Buttonss
                icon={<AiTwotoneShop />}
                label="Industrial Land"
                onChange={onChange2}
                value="Industrial Land"
                width="w-48"
                checked={checked2 === "Industrial Land"}
              />
              <Buttonss
                icon={<PiWarehouseBold />}
                label="Plot File"
                onChange={onChange2}
                value="Plot File"
                width="w-40"
                checked={checked2 === "Plot File"}
              />
            </div>
            <div className="flex mb-3">
              <Buttonss
                icon={<PiDoorOpenBold />}
                label="Plot Form"
                onChange={onChange2}
                value="Plot Form"
                width="w-40"
                checked={checked1 === "Plot Form"}
              />
            </div>
          </div>
        </div>
      )}
      
      {activeButton === "Commercial" && (
        <div>
          <div>
            <div className="flex mb-3">
              <Buttonss
                icon={<AiFillBank />}
                label="Office"
                onChange={onChange3}
                value="Office"
                width="w-42"
                checked={checked3 === "Office"}
              />
              <Buttonss
                icon={<AiOutlineHdd />}
                label="Shop"
                onChange={onChange3}
                value="Shop"
                width="w-42"
                checked={checked3 === "Shop"}
              />
              <Buttonss
                icon={<AiTwotoneShop />}
                label="Ware House"
                onChange={onChange3}
                value="Ware House"
                width="w-36"
                checked={checked3 === "Ware House"}
              />

              <Buttonss
                icon={<AiTwotoneShop />}
                label="Factory"
                onChange={onChange3}
                value="Factory"
                width="w-32"
                checked={checked3 === "Factory"}
              />
            </div>
            <div className="flex mb-3">
              <Buttonss
                icon={<PiWarehouseBold />}
                label="Building"
                onChange={onChange3}
                value="Building"
                width="w-32"
                checked={checked3 === "Building"}
              />
              <Buttonss
                icon={<PiDoorOpenBold />}
                label="Other"
                onChange={onChange3}
                value="Other"
                checked={checked3 === "Other"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
