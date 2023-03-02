import React from 'react';
import data from '../metal.json';

function MetalMeta() {
    {/* Returning Number of Bands from Metal */}
    const numberOfBands = data.length;
    const numberOfFans = data.reduce((acc, band) => {
        return acc + band.fans;
    }, 0);

    return (
        <div>
            <p>
                Bands: {numberOfBands}
            </p>
            <p>
                Total Fans: {numberOfFans}
            </p>
        </div>
    );
}

export default MetalMeta;