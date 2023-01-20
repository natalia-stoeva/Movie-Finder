import React from "react";

export const SectionTitle = ({ name }) => {
    return(
        <div className="row">
            <div className="col-12 py-2">
                <h2 className="section-title"> {name} </h2>
            </div>
        </div>
    )
}