import Button from './Button'
import Description from './pages/description/Description'
import Etudes from './pages/etudes/Etudes'
import Experience from './pages/experience/Experience'
import Infos from './pages/infos/Infos'
import Interests from './pages/interests/Interests'
import Portfolio from './pages/portfolio/Portfolio'
import Profil from './pages/profil/Profil'
import Footer from './pages/footer/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Home(props: any) {
  const notify = () =>
    toast.success('Downloaded ! 🔥', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })

  return (
    <>
      <div className="main">
        <div className="w-full xs:h-auto sm:h-30 md:h-30 lg:h-30 flex flex-wrap mobile-409px xxs:flex-col xs:flex-row md:flex-row xs:justify-between px-7 mt-4">
          <div className="flex justify-center xs:justify-start">
            <Profil />
          </div>
          <div className="flex items-center justify-center xs:justify-end">
            <a href="mailto:fournet.renaud@gmail.com">
              <Button>
                <p className="font-black text-white-100 tracking-widest">ME CONTACTER</p>
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <p className="text-whitesmoke-100 text-4xl xs:text-5xl md:text-7xl font-black stroke tracking-widest">
            BONJOUR
          </p>
          <div className="vertical mt-20 md:mt-40"></div>
        </div>
        <div className="flex flex-wrap justify-center pt-40 md:pt-72 2xl:px-40">
          <div className="m-5">
            <Infos />
          </div>
          <div className="m-5">
            <Description />
          </div>
          <div className="m-5">
            <Experience />
          </div>
          <div className="m-5">
            <Portfolio />
          </div>
          <div className="m-5 lg:mb-10">
            <Etudes />
          </div>
          <div className="m-5 lg:mb-10">
            <Interests />
          </div>
        </div>
        {/* <div className="grid justify-items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xs:gap-8 gap-6 xs:-mt-0  md:px-60 lg:px-60 pt-40 md:pt-72">
          <div>
            <Infos />
          </div>
          <div>
            <Description />
          </div>
          <div>
            <Portfolio />
          </div>
          <div>
            <Experience />
          </div>
          <div className="lg:mb-10">
            <Etudes />
          </div>
          <div className="lg:mb-10">
            <Interests />
          </div>
        </div> */}
        <div className="flex justify-center">
          <div className="mt-20 mb-20">
            <a
              onClick={notify}
              href={require('../assets/files/Renaud_Fournet_CV_05_22.pdf')}
              download="Renaud_Fournet_resume"
            >
              <div>
                <Button>
                  <p className="font-black tracking-widest">TÉLÉCHARGER CV</p>
                </Button>
              </div>
            </a>
          </div>

          <ToastContainer position="bottom-right" />
        </div>
      </div>
      <div className="footer flex justify-center items-center">
        <Footer />
      </div>
    </>
  )
}

export default Home
