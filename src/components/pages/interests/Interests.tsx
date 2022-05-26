import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'
import { jsLogo } from '../../../assets/images'

function Interests() {
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
      className="relative p-10 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg bg-secondary-100"
    >
      <div className="mb-10">
        <div className="flex h-32 justify-start text-white-100 text-6xl xs:text-9xl sm:text-9xl  md:text-9xl">
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
          <img className="w-10 md:w-20 pr-2" alt="javascript" src={jsLogo} />
        </div>
        <div className="line-horizontal-white mt-4 mb-4"></div>
        <div>
          <p className="flex justify-start font-black text-1xl xs:text-4xl md:text-4xl text-white-100">
            COMPÉTENCES
          </p>
        </div>
      </div>
      <div className="flex items-center text-white-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">Ce que je fais</p>&nbsp;&nbsp;
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
      className="relative w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 flex flex-col bg-white rounded-lg bg-primary-200"
    >
      <div>VERSO</div>
    </a.div>
  )
}

export default Interests
