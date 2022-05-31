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
      className="flex bg-white-100 w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg"
    >
      <div className="relative overflow-auto no-scrollbar">
        <div className="p-10">
          <div className="mb-10 mt-8">
            <p className="flex text-left  text-black-100 text-1xl xs:text-1xl sm:text-1xl">
              <img alt="location" src={location} /> &nbsp; Bayonne, FR
            </p>
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
            Passionné de nouvelles technologies et toujours partant pour de nouveaux challenges,
            j'aimerais enrichir et développer mes compétences en intégrant une entreprise et ainsi
            contribuer à son développement et prendre part à des projets inspirants
          </p>
        </div>
      </div>
    </div>
  )
}

export default Infos
