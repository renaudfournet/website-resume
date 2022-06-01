import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IContactList from '../../../interface/IContactList'

function Footer() {
  //LIST CONTACTS
  const contactList = [
    {
      icon: faLinkedinIn,
      name: '@renaudfournet',
      link: 'https://www.linkedin.com/in/renaud-fournet/'
    },
    { icon: faGithub, name: '@renaudfournet', link: 'https://github.com/renaudfournet' },
    { icon: faTwitter, name: '@ianyrneh', link: 'https://twitter.com/anybotcandoit' }
  ]
  const listItems = contactList.map(({ icon, name, link }: IContactList) => (
    <li className="text-left">
      <a href={link}>
        <FontAwesomeIcon icon={icon} /> &nbsp; {name}
      </a>
    </li>
  ))

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xs:gap-10 md:gap-52 text-white-100 ">
        <div>
          <div className="line-horizontal-white mb-4"></div>
          <p className="flex text-left font-black text-1xl xs:text-4xl sm:text-4xl text-white-100">
            CONTACTS
          </p>
        </div>
        <div>
          <ul>{listItems}</ul>
        </div>
      </div>
    </>
  )
}

export default Footer
