import React from "react";

export const RatingsInfo = ({ runtime, status }) => {
    return(
        <div className="row">
            <p className="info-values pb-2"> {runtime} min, {status} </p>
        </div>        
    )
};