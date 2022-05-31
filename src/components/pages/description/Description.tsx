import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { jsLogo } from '../../../assets/images'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'

function Description() {
  //CHART JS
  const data = {
    labels: ['REACT', 'TAILWIND UI', 'VSCODE'],

    datasets: [
      {
        label: 'My First Dataset',
        data: [33, 33, 33],
        backgroundColor: ['#365DED', '#FFFFFF', '#C1F7D5'],
        borderWidth: 0
      }
    ]
  }

  //NOT DISPLAY LABEL MOBILE
  function labelDisplay(): any {
    if (window.innerWidth < 4000 && window.innerWidth > 400) {
      return true
    } else {
      return false
    }
  }

  const options: any = {
    plugins: {
      title: { display: false, text: 'title', color: 'white' },
      // maintainAspectRatio: false,
      legend: {
        display: labelDisplay(),
        position: 'right',
        labels: {
          color: 'white'
        }
      }
    }
  }

  console.log('*********', window.innerWidth)

  //SHOW BUTTON
  const [show, setShow] = useState(false)
  const showMore = () => {
    setShow(!show)
  }

  // SKILLS
  const listFront = [
    'HTML / CSS',
    'React',
    'React Native',
    'Angular',
    'Tailwind UI',
    'Material UI',
    'Bootstrap'
  ]
  const listBack = ['Node JS', 'Express', 'MySQL']
  const listEnv = ['Git', 'Visual Studio Code', 'Agile (Scrum)', 'MacOS']

  return !show ? (
    <div
      onMouseOver={showMore}
      className="relative p-10 w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg bg-secondary-100"
    >
      <div className="mb-10">
        <div className="flex h-16 xs:h-32 md:h-32 justify-start text-white-100 text-6xl xs:text-9xl sm:text-9xl  md:text-9xl">
          <img className="xxs:w-10 xs:w-20 md:w-20" alt="javascript" src={jsLogo} />
        </div>
        <div className="line-horizontal-white mt-4 mb-4"></div>
        <div>
          <p className="flex justify-start font-black text-2xl xs:text-4xl md:text-4xl text-white-100">
            COMPÉTENCES
          </p>
        </div>
      </div>
      <div className="flex items-center text-white-100 absolute p-4 bottom-0 right-0 ">
        <p className="text-xs font-bold">Ce que je fais</p>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  ) : (
    <div
      onMouseLeave={showMore}
      className="relative w-80 h-80 xs:w-96 xs:h-96 md:w-96 md:h-96 flex flex-col bg-white rounded-lg bg-secondary-100"
    >
      <div className="relative overflow-auto no-scrollbar">
        <div className="flex flex-col justify-center xxs:px-10 xs:px-8 md:px-8 xxs:pt-5 mb-2">
          <div>
            <Pie data={data} options={options} />
          </div>
          <div className="text-white-100 font-black text-left">SKILLS</div>
          <div className="grid grid-cols-1 text-white-100 xxs:mt-5 xs:mt-2 md:mt-2">
            <div className="flex flex-col text-left">
              <div className="font-bold mt-2">FRONT</div>
              {listFront.map(item => (
                <div>{item}</div>
              ))}
              <div className="font-bold mt-2">BACK</div>
              {listBack.map(item => (
                <div>{item}</div>
              ))}
              <div className="font-bold mt-2">ENVIRONNEMENT</div>
              {listEnv.map(item => (
                <div>{item}</div>
              ))}
            </div>

            {/* <p className="flex justify-center font-bold text-1xl xs:text-2xl md:text-2xl text-white-100 mb-10">
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
          </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
