import React from "react";
// import { Container } from "react-bootstrap";
import Like from "../Like/Like";
import './Band.css'

function Band({band_name, formed, fans, origin, style, split}) {
    let likeButton;
    fans = fans * 1000;
    fans = fans.toLocaleString('en');
    const format = style.split(',');
    const formatItems = format.map((style) => {
        return(<li key={style}>{style}</li>);
    })

    if (split === '-') {
        likeButton = <Like />
    }

    return(
        <div className="band-container">
            <h2>{ band_name }</h2>
            <p>Origin: { origin } Fans: { fans }</p>
            <p>Formed: { formed } Split: { split }</p>
            <h2>Styles</h2>
            <ul> { formatItems }</ul>
            { likeButton }
        </div>
    )
}

export default Band;