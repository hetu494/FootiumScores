import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { GET_LIVE_FIXTURES } from '../GraphQL/Queries';
import { BounceLoader } from 'react-spinners';
import ScoreCard from '../components/common-components/ScoreCard/ScoreCard';

function LiveFixtures() {
  const { error, loading, data } = useQuery(GET_LIVE_FIXTURES);
  
  const [resultsList, setResultsList] = useState([]);
  function refreshPage() {
    window.location.reload(false);
  }
  
  useEffect(() => {
    if (data) {
        setResultsList(data.fixtures);
        console.log(data.fixtures);
        console.log(Object.keys(data).length);
    }
  }, [data]);

if (loading) return <BounceLoader color="#36d7b7" />
if (error) return `Error! ${error}`;
if (data) {
  if (data.length === 1) {
    return <div><h2>No Live Games </h2></div>
  } {return <div>
      <button onClick={refreshPage}>Click to reload!</button>
    <div> 
        {
        resultsList.map((val) => {
            return <ScoreCard data={val} />;
        })}</div></div>;
}
}
}

export default LiveFixtures;
