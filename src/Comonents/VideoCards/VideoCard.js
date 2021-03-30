import React from 'react'
import './Videocard.css'
export function Videocard() {
    return (
        <div className="video-card">
            <iframe src="https://www.youtube.com/embed/Vr4MfMlKbnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
            <div className="video-heading"></div>
        </div>
    )
}


