import React from "react";
import { youtubeBaseURL } from "../../utils/mediaUrls";

export const Video = ( {videoKey} ) => {
    return(
        <div className="video-responsive">
        <iframe 
        src={`${youtubeBaseURL}${videoKey}`}         
        width="853"
        height="480"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen        
        />        
    </div>
    )
}