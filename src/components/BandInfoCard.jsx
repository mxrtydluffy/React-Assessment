import React from 'react';

function BandInfoCard({ band }) {
    const { band_name, formed, origin, fans, style, split } = band;

    return (
        <div>
            <h1>{band_name}</h1>
            <p>Origin</p>
            <p>Fans</p>
            <p>Formed</p>
            <p>Split</p>
        </div>
    )
}