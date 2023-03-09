import React, {useState} from "react";
import './style.css';
import blindOpen from './images/blinds-open.svg';
import blindClosed from './images/blinds-closed.svg';

const Blinds = ( {state} ) => {
    const [status, setStatus] = useState(state);

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={status === 'open' ? blindOpen : blindClosed} />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button onClick={() => {setStatus('open')}} className={status === 'open' ? "button button--active" : "button"}>Otevřeno</button>
                <button onClick={() => {setStatus('closed')}} className={status === 'closed' ? "button button--active" : "button"}>Zavřeno</button>
            </div>
		</div>
    )
}

export default Blinds;