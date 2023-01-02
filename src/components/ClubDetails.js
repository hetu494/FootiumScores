import React from "react";
import './ClubDetails.css';

function ClubDetails({ data }) {


    return (
        <div>
            <h2>{data.name}</h2>
            <h3>{data.id}</h3>
            <div>
                <div className="container">
                    <div className="s_bode">
                        <div className="left_section">
                            <img src="https://www.freepnglogos.com/uploads/manchester-united-logo-png/manchester-united-logo-football-logos-vector-eps-cdr-svg-download-7.png" alt=""></img>
                            <h2>Manchester United</h2>
                        </div>

                        <div className="mid_section">
                            <h1>3 - 2</h1>
                        </div>
                        <div className="right_section">
                            <img src="https://www.freepnglogos.com/uploads/barcelona-png/barcelona-new-crest-png-sinastf-deviantart-1.png" alt=""></img>
                            <h2>FC Barcelona</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClubDetails;