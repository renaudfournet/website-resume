import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../../Button'
import PlayWidget from 'react-spotify-widgets'

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

  console.log('********* THATS MY DATA', data)

  return (
    <>
      {/* <div onClick={handleGetPlaylists}>
        <Button background="green" color="white">
          <span className="font-black tracking-wide">SEE PLAYLISTS</span>
        </Button>
      </div> */}

      {/* <div onClick={handleGetPlaylists}>
        {data?.items ? data.name.map(item => <p>{item.name}</p>) : null}
      </div> */}
      {/* <SpotifyPlayer
        autoPlay={true}
        token={token}
        uris={['spotify:album:6NMzokKOYpPO9VXDjmc5y6']}
      /> */}
      <div className="flex justify-center">
        <PlayWidget width={300} height={380} uri={'spotify:album:6NMzokKOYpPO9VXDjmc5y6'} />
      </div>
    </>
  )
}

export default SpotifyGetPlaylists
