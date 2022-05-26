import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'

function Experience() {
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
      className="relative bg-white p-10 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg bg-white-100"
    >
      <div className="mb-10 flex flex-col">
        <div className="h-32"></div>

        <div className="line-horizontal-blue mt-4 mb-4"></div>
        <p className="flex text-left font-black text-1xl xs:text-4xl sm:text-4xl text-primary-100">
          EXPÉRIENCES
        </p>
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
      className="flex bg-white w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 rounded-lg bg-white-100"
    >
      <div className="relative overflow-auto no-scrollbar">
        <div className="flex flex-col p-6 static ">
          <div>
            <p className="text-left  text-primary-100 font-bold text-2xl">Expériences</p>
            <div>
              <ul>
                <li className="mt-4">
                  <div className="text-primary-100 font-extrabold	">
                    DÉVELOPPEUR WEB (alternance)
                  </div>
                  <div className="text-black-100">septembre 2021 / mai 2022</div>
                  <div className="text-black-100 italic">Graal Quest - Hossegor</div>
                </li>
                <li className="mt-2">
                  <div className="text-primary-100 font-extrabold	">DÉVELOPPEUR WEB (stage)</div>
                  <div className="text-black-100">février / juin 2021</div>
                  <div className="text-black-100 italic">Budget Our Planet - Hendaye (remote)</div>
                </li>
                <li className="mt-2">
                  <div className="text-primary-100 font-extrabold	">
                    PROJETS DE FORMATION DÉVELOPPEUR WEB & WEB MOBILE
                  </div>
                  <div className="text-black-100 italic mt-2">TREE6CLOPE</div>
                  <div className="text-black-100">
                    Réalisation d’un outil destiné aux adhérents et aux administrateurs de
                    l’association Tree6Clope avec pour but de simplifier la gestion des données.
                  </div>
                  <div className="text-black-100 italic mt-2">HACKATON “BACK TO THE FUTURE”</div>
                  <div className="text-black-100">
                    Création d’une application web avec pour contexte le début du 20ème siècle.
                    L’application permet la réservation de trajets en calèche à travers la France à
                    une date choisie, utilisant l’API BlaBlaCar
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a.div>
  )
}

export default Experience
