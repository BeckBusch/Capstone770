import "../css/DashboardCard.css";

import DogImage from "../assets/dog-image.png";

function DashboardCard(props) {
    return (            
            
        <div className="card-section">
            
            <div className="dashboard-card">

                <div className="div-dog-image">
                <img src={DogImage} className="dog-image" alt="Dog"/>
                {/* <img src={require({props.dogImage})} className="dog-image" alt={props.dogName}}/> */}
                </div>

                <div className="div-dog-details">

                    <h1 className="dog-name">{props.name}</h1>
                    <h3 className="dog-breed">{props.breed}</h3>
                    <h3 className="dog-age">{props.age} Years</h3>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;