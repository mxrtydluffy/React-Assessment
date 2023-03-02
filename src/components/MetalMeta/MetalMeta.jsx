import React from "react";
import data from '../../metal.json'

function MetalMeta({ query, setQuery }) {
    const totalBands = data.length;
    let totalFans = data.reduce((compile, currentValue) => {
        return(compile + currentValue.fans);
    }, 0)
    
}