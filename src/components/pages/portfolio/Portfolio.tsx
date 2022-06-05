import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faChess, faCloudBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { projectIcon } from '../../../assets/images'

function Description() {
  //SHOW BUTTON
  const [show, setShow] = useState(false)
  const showMore = () => {
    setShow(!show)
  }

  return !show ? (
    <div
      onMouseOver={showMore}
      className="relative flex bg-white w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg bg-primary-100"
    >
      <div className=" p-10 overflow-auto no-scrollbar flex flex-col">
        <div className="h-32 flex justify-start">
          <img alt="projets" src={projectIcon} />
        </div>
        <div className="mb-10">
          <div className="line-horizontal-white mt-4 mb-4"></div>
          <p className="flex text-left font-black text-2xl xs:text-4xl sm:text-4xl text-white-100">
            PROJETS
          </p>
        </div>
      </div>

      <div className="flex items-center text-white-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">En savoir plus</p>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  ) : (
    <div
      onMouseLeave={showMore}
      className="relative w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 flex bg-white rounded-lg bg-primary-100 text-white-100"
    >
      <div className="relative overflow-auto no-scrollbar">
        <div className="flex flex-col p-6">
          <div className="text-left">
            <ul>
              <li className="mt-4">
                <div className="text-white-100 font-extrabold">
                  WEATHER APP&nbsp;&nbsp; <FontAwesomeIcon icon={faCloudBolt} />
                </div>
                <div className="text-black-100">
                  <a href="https://weather-app-renaud.netlify.app/">Weather-app</a>
                </div>
              </li>
              <li className="mt-4">
                <div className="text-white-100 font-extrabold">
                  BOT TWITTER&nbsp;&nbsp; <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="text-black-100">
                  <a href="https://twitter.com/anybotcandoit">@VulesJerne</a>
                </div>
              </li>
              <li className="mt-4">
                <div className="text-white-100 font-extrabold">
                  CHESS API&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faChess} />
                </div>
                <div className="text-black-100">
                  <a href="https://alphajasonbot.netlify.app/">@AlphaJason</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
