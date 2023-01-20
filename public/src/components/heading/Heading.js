import React from "react";

export const Heading = ({ name }) => {
    return(
        <div className="row">
            <div className="col-12">
                <h2 className="py-2"> { name } </h2>
            </div>
        </div>
    )
}