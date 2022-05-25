import {
  faApple,
  faBootstrap,
  faGithubSquare,
  faGitSquare,
  faHtml5,
  faJs
} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState } from 'react'
import { useSpring, a } from 'react-spring'
import { tailwindLogo, vscodeLogo } from '../../../assets/images'

function Description() {
  //CHART.JS
  const data = {
    labels: ['REACT', 'ANGULAR'],
    datasets: [
      {
        label: 'Frameworks',
        data: [50, 50],
        backgroundColor: ['orange', 'green']
      }
    ]
  }
  const options: any = {
    plugins: {
      title: {
        display: true,
        text: 'FRAMEWORKS',
        font: { size: 20 },
        color: 'white'
      },
      legend: {
        labels: {
          color: 'white',
          font: { size: 10 }
        },
        position: 'top'
      }
    }
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
      className="relative p-10 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg  bg-primary-200"
    >
      <div className="flex justify-center text-white-100 text-6xl xs:text-9xl sm:text-9xl  md:text-9xl">
        <FontAwesomeIcon icon={faJs} />
      </div>
      <div>
        <p className="flex justify-center font-bold text-1xl xs:text-3xl md:text-3xl text-white-100 mt-10 sm:mt-20 px-4">
          JAVASCRIPT
        </p>
      </div>
      <div className="flex items-center text-white-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">More about me</p>&nbsp;&nbsp;
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
      <div style={{ width: '200px', height: '200px', display: 'block', margin: 'auto' }}>
        <Doughnut data={data} options={options} />
      </div>
      {/* <p className="flex justify-center font-bold text-1xl xs:text-2xl md:text-2xl text-white-100">
        Techno :
      </p> */}
      <p className="flex justify-center font-bold text-1xl xs:text-2xl md:text-2xl text-white-100 mb-10">
        <FontAwesomeIcon className="px-2" icon={faGitSquare} />
        <FontAwesomeIcon className="px-2" icon={faGithubSquare} />
        <FontAwesomeIcon className="px-2" icon={faBootstrap} />
        <FontAwesomeIcon className="px-2" icon={faHtml5} />
        <FontAwesomeIcon className="px-2" icon={faApple} />
        <img
          className="mx-2"
          src={tailwindLogo}
          alt="tailwind"
          style={{ width: '20px', height: '20px' }}
        />
        <img
          className="mx-2"
          src={vscodeLogo}
          alt="vscode"
          style={{ width: '15px', height: '15px' }}
        />
      </p>
    </a.div>
  )
}

export default Description
