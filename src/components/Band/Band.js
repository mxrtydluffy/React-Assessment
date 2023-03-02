import React from "react";

function Band({band_name, formed, fans, origin, style, split}) {
    fans = fans * 1000;
    fans = fans.toLocaleString('en');
}

export default Band;