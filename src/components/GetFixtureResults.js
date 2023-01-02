import React, { useEffect, useState } from "react";

import { useQuery, gql } from "@apollo/client";

import { GET_FIXTURES, GET_FIXTURES_RESULTS } from '../GraphQL/Queries';

import ClubDetails from '../components/ClubDetails';

import { BounceLoader } from 'react-spinners';

import ScoreCard from '../components/common-components/ScoreCard/ScoreCard';

function GetFixtureResults() {

    const { error, loading, data } = useQuery(GET_FIXTURES_RESULTS);
    const [resultsList, setResultsList] = useState([]);
    useEffect(() => {
        if (data) {
            setResultsList(data.fixtures);
            console.log(data.fixtures);
        }
    }, [data]);

    if (data) {
        return <div>            {
            resultsList.map((val) => {
                return <ScoreCard data={val} />;
            })}</div>;
    }
    return <BounceLoader color="#36d7b7" />;
}

export default GetFixtureResults;