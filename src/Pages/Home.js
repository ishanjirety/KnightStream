import React from 'react'
import {Videodescription} from '../Comonents'
import {Link} from 'react-router-dom'
const data={
    title:"aeadwwd",
    videoUrl:"awdwdawd",
    id:"MJC4wFdMMyc",
    channelName:"wdawdawdaw"
}
export function Home() {
    return (
        <div className="main-body home">
            <div className="heading">
                <p>KnightStream</p>
            </div>
            <div className="nav-options">
                <p>Recommended </p>
                <div className="display-items">
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                </div>
            </div>
            <div className="nav-options">
                <p>Playlist <Link className="nav-options-link" to="/playlist">View More</Link></p>
                <div className="display-items">
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                </div>
            </div>
            <div className="nav-options">
                <p>Liked Videos <Link className="nav-options-link" to="/liked-videos">View More</Link></p>
                <div className="display-items">
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                <Videodescription data={data}/>
                </div>
            </div>
        </div>
    )
}

