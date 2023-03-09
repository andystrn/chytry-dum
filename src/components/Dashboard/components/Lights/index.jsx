import React from "react";
import './style.css';
import Light from "./Light";

const Lights = ( {lights} ) => {
    return (
        <div className="lights">
            {lights.lights.map((ligh) => <Light key={ligh.name} name={ligh.name} state={ligh.state} />)}
        </div>
    )
}

export default Lights;