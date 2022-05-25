import { DocumentTextOutline } from 'heroicons-react'
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
        <div className="w-full xs:h-auto sm:h-30 md:h-30 lg:h-30 flex flex-wrap justify-between px-7 mt-4">
          <div>
            <Profil />
          </div>
          <a href="mailto:fournet.renaud@gmail.com">
            <Button background="#365DED" color="black">
              <span className="font-black text-white-100 tracking-wide">ME CONTACTER</span>
            </Button>
          </a>
        </div>
        <div className="flex justify-center mt-20">
          <p className="text-whitesmoke-100 text-7xl font-black stroke tracking-widest">BONJOUR</p>
          <div className="vertical mt-40"></div>
        </div>

        <div className="grid justify-items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xs:gap-8 gap-6 xs:-mt-0 lg:px-40 xs:px-0 pt-72">
          <div>
            <Infos />
          </div>
          <div>
            <Description />
          </div>
          <div>
            <Experience />
          </div>
          <div>
            <Portfolio />
          </div>
          <div className="mb-10">
            <Interests />
          </div>
          <div className="mb-10">
            <Etudes />
          </div>
        </div>
        <div className="flex justify-center">
          <a
            onClick={notify}
            href={require('../assets/files/Renaud_Fournet_CV_2021.pdf')}
            download="Renaud_Fournet_resume"
          >
            <div className="mt-20 mb-20">
              <Button background="#365DED" color="black" icon={<DocumentTextOutline />}>
                <span className="font-black text-white-100 tracking-wide">TÉLÉCHARGER CV</span>
              </Button>
            </div>
          </a>
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
