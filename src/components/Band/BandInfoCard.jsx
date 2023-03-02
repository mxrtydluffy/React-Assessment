import React from 'react';
import LikeCounter from '../LikeCounter';
// import 'bootstrap/dist/css/bootstrap.min.css';

function BandInfoCard({ band }) {
    const { band_name, formed, origin, fans, style, split } = band;

    return (

        <article>
            <div>
                <h1>{band_name}</h1>
                <p>
                Origin: <span>{origin}</span>
                Fans: <span>{fans}</span>
                Formed: <span>{formed}</span>
                Split: <span>{split}</span>
                </p>
                <ul>
                    <p>Styles: </p>
                    {style.split(',').map((genre) => (
                        <li key={genre}>
                            <p>{genre}</p>
                        </li>
                    ))}
                </ul>
                {split.length == 1 && <LikeCounter />}
            </div>
        </article>        
    );
}

export default BandInfoCard;