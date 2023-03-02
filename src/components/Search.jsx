import { fireEvent } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import data from '../metal.json'

function Search({ setBands }) {
    const [search, beginSearch] = useState('');

    useEffect(() => {
        if (!search) {
            setBands(data);
            return;
        }

        const filteredBands = data.filter((band) => {
            return band.band_name.toLowerCase().includes(search.toLocaleLowerCase());
        });

        setBands(filteredBands);
    }, [search]);

    return(
        <div>

        </div>
    )
}

export default Search;