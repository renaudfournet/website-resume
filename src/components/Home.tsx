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
        <div className="xxs:mb-8 xxs:pb-8 xs:mb-8 xs:pb-8 w-full xs:h-auto sm:h-40 md:h-40 lg:h-40 flex flex-wrap justify-between px-7 mt-4">
          <div>
            <Profil />
          </div>
          <a href="mailto:fournet.renaud@gmail.com">
            <Button color="black" border="black">
              ME CONTACTER
            </Button>
          </a>
        </div>

        <div className="grid justify-items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xs:gap-8 gap-6 xs:-mt-0 lg:px-40 xs:px-0">
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
            <Etudes />
          </div>
          <div className="mb-10">
            <Interests />
          </div>
          <div className="mb-10">
            <Portfolio />
          </div>
        </div>
        <div className="flex justify-center">
          <a
            onClick={notify}
            href={require('../assets/files/Renaud_Fournet_CV_2021.pdf')}
            download="Renaud_Fournet_resume"
          >
            <div className="mt-20 mb-20">
              <Button color="black" border="black" icon={<DocumentTextOutline />}>
                TÉLÉCHARGER CV
              </Button>
            </div>
          </a>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
      <div className="footer flex justify-center items-center">
        <Footer color="red" border="white" />
      </div>
    </>
  )
}

export default Home
