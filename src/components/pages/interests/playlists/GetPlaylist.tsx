import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../../Button'
import SpotifyPlayer from 'react-spotify-web-playback'

const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setToken(localStorage.getItem('accessToken'))
    }
  }, [])

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        setData(response.data)
        console.log('*******', setData)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      {/* <div onClick={handleGetPlaylists}>
        <Button background="green" color="white">
          <span className="font-black tracking-wide">SEE PLAYLISTS</span>
        </Button>
      </div>

      {data?.items ? data.items.map(item => <p>{item.name}</p>) : null} */}
      <div>
        <SpotifyPlayer autoPlay token={token} uris={['spotify:album:6NMzokKOYpPO9VXDjmc5y6']} />
      </div>
    </>
  )
}

export default SpotifyGetPlaylists
