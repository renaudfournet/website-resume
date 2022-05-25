import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'

function Infos() {
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
      <div className="relative overflow-auto no-scrollbar">
        <div className="p-10">
          <div className="mb-10 mt-8">
            <p className="flex text-left font-bold text-1xl xs:text-4xl sm:text-4xl text-primary-100">
              Front End Web Developer
            </p>
            <p className="flex text-left  text-primary-100 text-1xl xs:text-3xl sm:text-3xl">
              <FontAwesomeIcon icon={faLocationDot} className="mt-1 xs:mt-2 md:mt-2" /> &nbsp;
              Bayonne, FR
            </p>
          </div>
          <div className="flex items-center text-primary-100 absolute p-4 bottom-0 right-0 ">
            <p className="text-xs font-bold">More about me</p>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
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
      <div className="flex flex-col p-6 static ">
        <div>
          <p className="text-left  text-primary-100 font-bold text-2xl">Qui suis-je ?</p>

          <p className="text-left  text-primary-100 text-sm">
            Passionné de nouvelles technologies et toujorus partant pour de nouveaux challenges,
            j'aimerais enrichier et développer mes compétences en intégrant une entreprise et ainsi
            contribuer à son développement et prendre part à des projets inspirants
          </p>
        </div>
      </div>
    </a.div>
  )
}

export default Infos
