import React from "react";
import data from '../../metal.json'
import './MetalMeta.css'

function MetalMeta({ query, setQuery }) {
    const totalBands = data.length;
    let totalFans = data.reduce((compile, currentValue) => {
        return(compile + currentValue.fans);
    }, 0)

    totalFans = totalFans * 1000
    totalFans = totalFans.toLocaleString('en');

    return(
        <div>
            <p>Total Bands: { totalBands }</p>
            <p>Total Fans: { totalFans }</p>
            <div className="band-input">
                <input 
                    value={query}
                    placeholder="Browse the Bands!"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>
    )
}

export default MetalMeta;