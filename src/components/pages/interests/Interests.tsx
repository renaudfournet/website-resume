import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { food, gaming, jsLogo, music, windsurf } from '../../../assets/images'
// import GetPlaylist from './playlists/GetPlaylist'
// import Button from '../../Button'
// import SpotifyGetPlaylists from './playlists/GetPlaylist'
import SpotifyGetPlaylists from './playlists/SpotifyGetPlaylist'

// const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'

// const clientID = process.env.REACT_APP_CLIENT_ID
// const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize'
// const REDIRECT_AFTER_LOGIN = 'http://localhost:3000/callback'
// const SPACE_DELIMITER = '%20'
// const SCOPES = [
//   'user-modify-playback-state',
//   'user-read-private',
//   'user-read-email',
//   'user-read-recently-played'
// ]
// const SCOPES_URL_PARAMS = SCOPES.join(SPACE_DELIMITER)
// const newAccessToken = process.env.REACT_APP_SPOTIFY_TOKEN

// const getReturnedParamsFromSpotifyAuth = hash => {
//   const stringAfterHashtag = hash.substring(1)
//   const paramsInUrl = stringAfterHashtag.split('&')
//   const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
//     console.log(currentValue)
//     const [key, value] = currentValue.split('=')
//     accumulater[key] = value
//     return accumulater
//   }, {})

//   return paramsSplitUp
// }

function Interests(props: any) {
  //SHOW BUTTON
  const [show, setShow] = useState(false)
  const showMore = () => {
    setShow(!show)
  }

  /*http://localhost:3000/callback#access_token=BQDwOFdFJ43pDv_GUMjHSonP1PDe8Sc_ieyXQN4dyeWWP6LyFC6oTI6rMC_w6JKt_WfZvv8Pq-z_om4rpSK5ryhar0x9HSynDhKKvBNVAQ_yaBobRmVZ6uZiCQaDKW2lM3b-tq03l713UEtz0YK_ng&token_type=Bearer&expires_in=3600*/

  // useEffect(() => {
  //   if (window.location.hash) {
  //     const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(
  //       window.location.hash
  //     )

  //     localStorage.clear()

  //     localStorage.setItem('accessToken', access_token)
  //     localStorage.setItem('tokenType', token_type)
  //     localStorage.setItem('expiresIn', expires_in)
  //   }
  // })

  // const handleLogin = (): any => {
  //   window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${clientID}&redirect_uri=${REDIRECT_AFTER_LOGIN}&scope=${SCOPES_URL_PARAMS}&response_type=token&show_dialog=true`
  // }

  return !show ? (
    <div
      onMouseOver={showMore}
      className="relative p-10 w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg bg-secondary-100"
    >
      <div className="mb-10">
        <div className="flex xxs:h-16 xs:h-32 md:h-32 justify-start text-white-100 text-6xl xs:text-9xl sm:text-9xl  md:text-9xl">
          <img className="w-9 xs:w-10 md:w-10 mr-6" alt="javascript" src={music} />
          <img className="w-9 xs:w-10 md:w-10 mr-6" alt="javascript" src={windsurf} />
          <img className="w-12 xs:w-16 md:w-16 mr-6" alt="javascript" src={food} />
          <img className="w-12 xs:w-16 md:w-16 mr-6" alt="javascript" src={gaming} />
        </div>
        <div className="line-horizontal-white mt-4 mb-4"></div>
        <div>
          <p className="flex justify-start font-black text-2xl xs:text-4xl md:text-4xl text-white-100">
            HOBBIES
          </p>
        </div>
      </div>
      <div className="flex items-center text-white-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">Découvrir ce que j'écoute en ce moment</p>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  ) : (
    <div
      onMouseLeave={showMore}
      className="p-6 w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 flex flex-col bg-white rounded-lg bg-secondary-100"
    >
      <div className="relative overflow-auto no-scrollbar">
        {/* <div onClick={handleLogin} className="text-left text-white-100">
          <Button background="green" color="white">
            <span className="font-black tracking-wide">LOGIN SPOTIFY</span>
          </Button>
        </div> */}
        <SpotifyGetPlaylists />
      </div>
    </div>
  )
}

export default Interests
