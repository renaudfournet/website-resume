import { faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'

function Etudes() {
  //REACT SPRING
  const [flipped, set] = useState(false)
  const anim = () => {
    set(!flipped)
  }

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 12, tension: 500, friction: 130 }
  })
  // SHOW BUTTON
  const [show, setShow] = useState(false)
  const showMore = () => {
    setShow(!show)
    anim()
  }

  return !show ? (
    <a.div
      onMouseOver={showMore}
      style={{ opacity: opacity.to(o => 1 - o), transform }}
      className="bg-white w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg border bg-white-100 card-home"
    >
      <div className="text-primary-100 flex justify-center mt-10">
        <FontAwesomeIcon className="text-6xl" icon={faGraduationCap} />
      </div>
      <div className="overflow-auto no-scrollbar mt-4">
        <div className="p-10 flex justify-center">
          <p className="flex font-bold text-1xl xs:text-4xl sm:text-4xl text-primary-100 ">
            Études
          </p>
        </div>
      </div>
      <div className="flex items-center text-primary-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">Voir</p>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </a.div>
  ) : (
    <a.div
      onMouseLeave={showMore}
      style={{
        opacity,
        transform,
        rotateX: '180deg'
      }}
      className="flex bg-white w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg border bg-white-100 card-home"
    >
      <div className="relative overflow-auto no-scrollbar">
        <div className="flex flex-col p-6 static ">
          <div>
            <p className="text-left  text-primary-100 font-bold text-2xl">Études</p>
            <div>
              <ul>
                <li className="mt-4">
                  <div className="text-primary-100 font-bold">FORMATION DÉVELOPPEUR WEB</div>
                  <div className="text-primary-100 italic">Septembre 2020 à février 2021</div>
                  <div className="text-primary-100">Wild Code School - Anglet</div>
                </li>
                <li className="mt-2">
                  <div className="text-primary-100 font-bold">
                    FORMATION DÉVELOPPEUR WEB AVANCÉE
                  </div>
                  <div className="text-primary-100 italic">Septembre 2021 à septembre 2022</div>
                  <div className="text-primary-100">Wild Code School - Remote</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a.div>
  )
}

export default Etudes
