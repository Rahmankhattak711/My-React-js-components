import { useState } from "react";
import "./components/Buttons.css";
import { AiFillHome,MdOutlineSell } from "react-icons/ai";
import { MdSell } from "react-icons/md";
import Buttonss from "./components/Buttonss.jsx";
import Properties from './components/Properties'
import TableInReact from './components/TableInReact.jsx'
import GetDataInApi from "./components/GetDataInApi";

function App() {
  const [checked, setChecked] = useState("Sell");

  const onChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <>
      {/* <div className="container">
        <h1 className="ml-4 text-3xl mt-[110px] mb-6">Select Purpose</h1>
        <div className="flex">
          <Buttonss
            icon={<MdSell/>}
            label="Sell"
            onChange={onChange}
            value="Sell"
            checked={checked === "Sell"}
          />
          <Buttonss
            icon={<AiFillHome />}
            label="Buy"
            onChange={onChange}
            value="Buy"
            checked={checked === "Buy"}
          />
        </div>
      </div>
      <TableInReact/> */}

      <Properties /> 

    </>
  );
}

export default App;
