import React from 'react';

import ResultsRow from '../ResultsRow/ResultsRow'

import './ResultsRows.scss';

export default function ResultsRows(props) {

  const resultsData = props.data;

  return (

    <section className="results-rows">
      <h2 className="results-rows__heading">Properties for sale in this neighborhood</h2>

      {resultsData.map(data => {
        return (<ResultsRow key={data.id} id={data.id} address={data.address} city={data.city} province={data.province} />)
      })}	      

    </section>




  )
}