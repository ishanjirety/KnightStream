import React from 'react'
import './Assets/css/Videocard.css'
import ReactPlayer from 'react-player'
export function Videocard(props) {
    const {url} = props
    return (
        <iframe width="100%" height="150%"  src="https://www.youtube.com/embed/Ou31aDaE0nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}


