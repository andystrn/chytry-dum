import React from "react";
import './style.css';
import Lights from "./components/Lights";
import Climate from "./components/Climate";
import Blinds from "./components/Blinds";

const Dashboard = ( {data} ) => {
    return (
        <main className="dashboard">
            <Lights lights={data}/>
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
            <Blinds state={data.blinds} />
        </main>
)}

export default Dashboard;