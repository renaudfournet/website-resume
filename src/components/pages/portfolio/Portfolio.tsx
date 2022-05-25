import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'

function Description() {
  //CHART.JS
  const data = {
    labels: ['React', 'Angular'],
    datasets: [{ label: 'The Level', data: [50, 50] }]
  }

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
      className="relative p-10 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg bg-primary-200 text-white-100"
    >
      Recto
    </a.div>
  ) : (
    <a.div
      onMouseLeave={showMore}
      style={{
        opacity,
        transform,
        rotateX: '180deg'
      }}
      className="relative w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 flex bg-white rounded-lg bg-primary-200 text-white-100"
    >
      Verso
    </a.div>
  )
}

export default Description
