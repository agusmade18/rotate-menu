import {
  BsFillPlusCircleFill,
  BsFillPeopleFill,
  BsFillPersonBadgeFill,
  BsFillSendPlusFill,
  BsFillPuzzleFill,
  BsFillRCircleFill,
  BsFillTelephoneXFill,
  BsAirplaneEnginesFill,
  BsFillDropletFill,
} from "react-icons/bs";
import { useState } from "react";

function App() {
  const menus = [
    <BsFillPeopleFill />,
    <BsFillPersonBadgeFill />,
    <BsFillSendPlusFill />,
    <BsFillPuzzleFill />,
    <BsFillRCircleFill />,
    <BsFillTelephoneXFill />,
    <BsAirplaneEnginesFill />,
    <BsFillDropletFill />,
  ];
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div className="w-full flex h-screen justify-center items-center bg-gradient-to-tr from-purple-600 to-pink-500">
      <div className={`menu ${active ? "active" : ""}`}>
        <div className={`toggle`} onClick={onClick}>
          <BsFillPlusCircleFill />
        </div>
        {menus.map((menu, i) => (
          <li style={{ "--i": i }} key={i}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
