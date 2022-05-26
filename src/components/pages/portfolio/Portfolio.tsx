import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'
import { projectIcon } from '../../../assets/images'

function Description() {
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

  //SHOW BUTTON
  const [show, setShow] = useState(false)
  const showMore = () => {
    setShow(!show)
    anim()
  }

  return !show ? (
    <a.div
      onMouseOver={showMore}
      style={{ opacity: opacity.to(o => 1 - o), transform }}
      className="flex bg-white w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg bg-primary-100"
    >
      <div className="relative p-10 overflow-auto no-scrollbar flex flex-col">
        <div className="h-32 flex justify-start">
          <img alt="projets" src={projectIcon} />
        </div>
        <div className="mb-10">
          <div className="line-horizontal-white mt-4 mb-4"></div>
          <p className="flex text-left font-black text-1xl xs:text-4xl sm:text-4xl text-white-100">
            PROJETS
          </p>
        </div>
      </div>

      <div className="flex items-center text-primary-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">En savoir plus</p>&nbsp;&nbsp;
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
      className="relative w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 flex bg-white rounded-lg bg-primary-100 text-white-100"
    >
      Verso
    </a.div>
  )
}

export default Description
