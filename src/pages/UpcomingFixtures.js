import React, { useEffect, useState } from 'react'
import { useLazyQuery } from "@apollo/client";
import Button from '@mui/material/Button';

import { GET_UPCOMING_FIXTURES } from '../GraphQL/Queries';


import { BounceLoader } from 'react-spinners';

import FixtureCard from '../components/common-components/ScoreCard/FixtureCard';

function UpcomingFixtures({divison}) {
    const divisonValue = divison;
    
    const [getResults, { error, loading, data }] = useLazyQuery(GET_UPCOMING_FIXTURES, {
        variables: {divisonValue}});
    const [resultsList, setResultsList] = useState([]);
    useEffect(() => {
        if (data) {
            setResultsList(data.fixtures);
            console.log(data.fixtures);
        }
    }, [data]);

    if (loading) return <BounceLoader color="#36d7b7" />
    if (error) return `Error! ${error}`;
    if (data) {
        return <div> 
            <Button variant="contained" onClick={() => getResults({ variables: {divisonValue} })}>
                Go!
            </Button>
            {
            resultsList.map((val) => {
                return <FixtureCard data={val} />;
            })}
            </div>;
    }
    return <div>
            <Button variant="contained" onClick={() => getResults({ variables: {divisonValue} })}>
                Go!
            </Button>
            </div> 
}

export default UpcomingFixtures
