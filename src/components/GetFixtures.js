import React, { useEffect, useState } from "react";

import { useQuery, gql } from "@apollo/client";

import { GET_FIXTURES } from '../GraphQL/Queries';

import ClubDetails from '../components/ClubDetails';

function GetFixtures() {

    const { error, loading, data } = useQuery(GET_FIXTURES);
    const [clubsList, setClubsList] = useState([]);
    useEffect(() => {
        if (data) {
            setClubsList(data.clubs);
            console.log(data.clubs);
        }
    }, [data]);

    return (
        <div>
            {
                clubsList.map((val) => {
                    return <ClubDetails data={val} />;
                })}
            <h1>Get Fixures</h1>
        </div>
    );
}

export default GetFixtures;