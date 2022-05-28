import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SpotifyPlayer from 'react-spotify-web-playback'
import Button from '../../../Button'

const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl'

const SpotifyGetPlaylists = (props: any) => {
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
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded'
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

  console.log('********* THATS MY TOKEN', data)

  return (
    <>
      <div onClick={handleGetPlaylists}>
        <Button background="green" color="white">
          <span className="font-black tracking-wide">SEE PLAYLISTS</span>
        </Button>
      </div>

      {data.name}
      {/* <div onClick={handleGetPlaylists}>
        {data?.items ? data.name.map(item => <p>{item.name}</p>) : null}
      </div> */}
      {/* <SpotifyPlayer
        autoPlay={true}
        token={token}
        uris={['spotify:album:6NMzokKOYpPO9VXDjmc5y6']}
      /> */}
    </>
  )
}

export default SpotifyGetPlaylists
