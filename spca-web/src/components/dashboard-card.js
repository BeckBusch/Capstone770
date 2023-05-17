import React from "react";
import "./dashboard-card.css";
// import { Link } from "react-router-dom";

function DashboardCard(props) {
    return (            
            
        <div className="card-section">
            
            <div className="dashboard-card">

                <div className="div-dog-image">
                <img src={require("../images/dog-image.png")} className="dog-image" alt="Dog"/>
                {/* <img src={require({props.dogImage})} className="dog-image" alt={props.dogName}}/> */}
                </div>

                <div className="div-dog-details">

                    <h1>{props.name}Cookie</h1>
                    <h3 className="breed-header">{props.breed}Golden Retriever</h3>
                    <h3 className="age-header">{props.age}3 Years Old</h3>
                    {/* <h1>DOG NAME</h1> */}
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;