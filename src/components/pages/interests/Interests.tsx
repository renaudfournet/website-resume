import * as React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { jsLogo } from '../../../assets/images'
import axios from 'axios'

function Interests(props: any) {
  //SHOW BUTTON
  const [show, setShow] = useState(false)
  const showMore = () => {
    setShow(show)
  }

  //SPOTIFY
  const newAccessToken = process.env.REACT_APP_SPOTIFY_TOKEN
  console.log('*******', newAccessToken)
  axios.get('https://api.spotify.com/v1/me/playlists', {
    params: { limit: 50, offset: 0 },
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ',
      'Content-Type': 'application/json'
    }
  })

  return show ? (
    <div
      onMouseOver={showMore}
      className="relative p-10 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg bg-secondary-100"
    >
      <div className="mb-10">
        <div className="flex xxs:h-16 xs:h-32 md:h-32 justify-start text-white-100 text-6xl xs:text-9xl sm:text-9xl  md:text-9xl">
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
        </div>
        <div className="line-horizontal-white mt-4 mb-4"></div>
        <div>
          <p className="flex justify-start font-black text-1xl xs:text-4xl md:text-4xl text-white-100">
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
      className="relative p-6 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 flex flex-col bg-white rounded-lg bg-secondary-100"
    >
      <div className="text-left text-white-100"></div>
    </div>
  )
}

export default Interests
