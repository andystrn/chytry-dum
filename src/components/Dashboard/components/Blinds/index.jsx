import React, {useState} from "react";
import './style.css';
import blindOpen from './images/blinds-open.svg';
import blindClosed from './images/blinds-closed.svg';

const Blinds = ( {state} ) => {
    const [status, setStatus] = useState(state);

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={status === 'open' ? blindOpen : blindClosed} alt="blind"/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={`button ${status === 'open' ? "button--active" : ""}`} onClick={() => {setStatus('open')}}>Otevřeno</button>
                <button className={`button ${status === 'closed' ? "button--active" : ""}`} onClick={() => {setStatus('closed')}}>Zavřeno</button>
            </div>
		</div>
    )
}

export default Blinds;