import React from 'react'
import './Assets/css/Videocard.css'
export function Videocard(props) {
    const {id} = props
    const url = `https://www.youtube.com/embed/${id}`
    return (
        <iframe width="100%" height="150%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}


