import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRightOutline } from 'heroicons-react'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'

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
      className="flex bg-white w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg border bg-white-100 card-home"
    >
      <div className="relative p-10 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg  bg-primary-200">
        <div>
          <div className="flex justify-center text-white-100 text-9xl">
            <FontAwesomeIcon icon={faSpotify} />
          </div>
          <p className=" font-bold text-left text-3xl text-white-100 mt-20 px-4">
            Discover my favourite tracks
          </p>
        </div>
        <div className="absolute p-4 bottom-0 right-0 text-white-100">
          <ArrowRightOutline />
        </div>
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
      verso
    </a.div>
  )
}

export default Interests
