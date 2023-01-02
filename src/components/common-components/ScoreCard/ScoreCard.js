import React from "react";
import './ScoreCard.css';

function ScoreCard({ data }) {

    const round = data.roundIndex + 1
    console.log(round);

    return (
        <div>
            <h2 className="title">Round: {round}</h2>
            <div className="container">
                <div className="s_bode">
                    <div className="left_section">
                        <img src={"https://footium.club/beta/api/nfts/clubs/" + data.match.homeClub.clubId + "/image.svg"} alt=""></img>
                        {/*<h2>{data.match.homeClub.clubId}</h2>*/}
                        <h3>{data.clubFixtures[0].club.name}</h3>
                    </div>

                    <div className="mid_section">
                        <h1>{data.match.homeClub.stats.goals} - {data.match.awayClub.stats.goals}</h1>
                    </div>
                    <div className="right_section">
                        <img src={"https://footium.club/beta/api/nfts/clubs/" + data.match.awayClub.clubId + "/image.svg"} alt=""></img>
                        {/*<h2>{data.match.awayClub.clubId}</h2>*/}
                        <h3>{data.clubFixtures[1].club.name}</h3>
                    </div>
                </div>
            </div>
            <a href={"https://footium.club/beta/game/fixtures/live/"+ data.matchId} target="_blank" rel="noopener noreferrer">Follow Match on Footium</a>
        </div>
    );
}

export default ScoreCard;