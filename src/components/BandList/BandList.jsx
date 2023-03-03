import React from 'react';
import Band from "../Band/Band"
import data from '../../metal.json'
import './BandList.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function BandList({ query }) {
    const bands = data
    .filter((obj) => {
        const Name = obj.band_name.toLowerCase().includes(query.toLowerCase())
        const Styles = obj.style.toLowerCase().includes(query.toLowerCase())
        return Name || Styles;
    })

    // Collecting key value pairs
    .map(({ ID, band_name, formed, origin, fans, split, style }) => {
        return(
            <Band
            key = {ID}
            band_name={band_name}
            fans = {fans}
            formed = {formed}
            origin={origin}
            split={split}
            style={style}
            />
        )
    })

    return (
        <div className='list-container'>
            { bands }
        </div>
    );
}

export default BandList;