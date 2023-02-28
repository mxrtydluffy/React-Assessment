import React, { useState } from 'react';

function LikeCounter(){
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <div
                onClick={() =>
                setLikes((status) => {
                    if (status > 0) {
                        return status -1;
                    }
                    return status;
                })
            }
            >
            <p>👎🏽</p>
            </div>
            <p>{likes}</p>
            <div
                onClick={() => setLikes((status) => status + 1)}
            >
                <p>👍🏽</p>
            </div>
        </div>
    );
}

export default LikeCounter;