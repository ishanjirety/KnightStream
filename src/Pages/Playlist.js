import React, { useEffect } from 'react'
import axios from 'axios'

import { usePlaylist, useToast, useAuth } from '../Context'

import { Playlistcard, Toast, ProfileButton } from '../Comonents'

import { getToken } from '../Token'

import playlist from '../Common-Assets/Playlist.svg'
import { useNavigate } from 'react-router'
import { removeToken } from '../Token'
import './styles.css'
import './Responsive-pages.css'

export function Playlist(props) {
    const { setToastContent, setToast, toast } = useToast()
    const { setLoggedin } = useAuth()
    const { PlaylistDispatcher, PlaylistState } = usePlaylist()
    const { token } = getToken() ? getToken() : { token: null }
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {

            (async function fetchData() {
                try {
                    const response_playlist = await axios.get(`https://KnightStream.ishanjirety.repl.co/api/playlist`, { headers: { authorization: token } })
                    const playlist = response_playlist.data.playlists
                    console.log(playlist)
                    PlaylistDispatcher({ type: "REFRESH-PLAYLIST", payload: playlist })
                }
                catch (e) {
                    setToast(true)
                    setToastContent("An error occured")
                    if (e.response?.status === 401) {
                        removeToken()
                        setLoggedin(false)
                        navigate('/login')
                    }
                }
            })()
        } else {
            setLoggedin(false)
            navigate('/login')
        }
    }, [])
    return (
        <div className="main-body">
            <div className="heading">
                <img src={playlist} alt="Playlists" /><p>Playlists</p>
                <ProfileButton />
            </div>
            <div className="card-wrapper">
                <ul className="list-playlist">
                    {PlaylistState.playlist.length > 0 ? PlaylistState.playlist.map((item, key) => {
                        return <li className="list-item-inline" key={key}><Playlistcard source="https://i.ytimg.com/vi/KGMEhdaZ6ZY/maxresdefault.jpg" text={item.name} data={item} keyValue={key} /></li>

                    }) : <p className="empty-heading">No playlist created</p>}
                </ul>
            </div>
            {toast && <Toast />}
        </div>
    )
}


