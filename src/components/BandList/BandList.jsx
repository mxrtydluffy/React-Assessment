import React from 'react';
import BandInfoCard from '../Band/BandInfoCard';
import data from '../'
// import 'bootstrap/dist/css/bootstrap.min.css';

function BandList({ bands }) {
    return (
        <section class="row col-6 col-sm-4">
            {bands.map((band, i) => {
                return <BandInfoCard key={i} band ={band} />
            })}
        </section>
    );
}

export default BandList;