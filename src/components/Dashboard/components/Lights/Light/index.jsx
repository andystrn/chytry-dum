import React, {useState} from "react";
import './style.css';
import LightOn from './images/light-on.svg';
import LightOff from './images/light-off.svg';

const Light = ( {name, state} ) => {
    const [status, setStatus] = useState({state});

    return (
        <div onClick={() => {setStatus(status === "on" ? "off" : "on")}} className="light">
			<div className="light__icon">
				<img src={status === "on" ? LightOn : LightOff} alt={status}/>
			</div>
			<div className="light__name">
				{name}
			</div>
		</div>
    )
}

export default Light;