import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { location } from '../../../assets/images'

function Infos() {
  // SHOW BUTTON
  const [show, setShow] = useState(false)
  const showMore = () => {
    setShow(!show)
  }

  return !show ? (
    <div
      onMouseOver={showMore}
      className="flex p-10 relative bg-white-100 w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg"
    >
      <div className="mb-10">
        <div className="flex items-center h-16 xs:h-32 md:h-32 justify-start text-white-100 text-1xl xs:text-1xl sm:text-1xl md:text-1l">
          <p className="flex text-left text-black-100 mt-20">
            <img alt="location" className="w-4" src={location} /> &nbsp; <span>Rennes, FR</span>
          </p>
        </div>
        <hr className="line-horizontal-blue mt-6 mb-4" />
        <p className="flex flex-col text-left font-black text-2xl xs:text-4xl sm:text-4xl text-primary-100">
          <span className="height-span">DÉVELOPPEUR</span>
          <span>FRONT END</span>
        </p>
      </div>
      <div className="flex items-center text-primary-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">À propos de moi</p>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  ) : (
    <div
      onMouseLeave={showMore}
      className="flex bg-white w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg bg-white-100"
    >
      <div className="flex flex-col p-6 static ">
        <div>
          <p className="text-left  text-primary-100 font-black text-3xl">QUI SUIS-JE ?</p>

          <p className="text-left text-1xl text-primary-100">
            Développeur web en reconversion passionné par le côté front end. Je partage mon temps
            entre le code et la musique.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Infos
