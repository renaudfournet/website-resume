import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IContactList from '../../../interface/IContactList'

function Footer() {
  //LIST CONTACTS
  const contactList = [
    { icon: faLinkedinIn, name: 'LinkedIn' },
    { icon: faTwitter, name: 'Twitter' },
    { icon: faGithub, name: 'Github' }
  ]
  const listItems = contactList.map(({ icon, name }: IContactList) => (
    <li>
      <FontAwesomeIcon icon={icon} /> {name}
    </li>
  ))

  return (
    <>
      <div className="grid grid-cols-2 gap-52 text-white-100">
        <div>column 1</div>
        <div>
          <ul>{listItems}</ul>
        </div>
      </div>
    </>
  )
}

export default Footer
