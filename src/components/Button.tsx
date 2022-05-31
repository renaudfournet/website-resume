import React from 'react'
import ButtonInterface from '../interface/IButton'

const Button: React.FC<ButtonInterface> = ({ children }) => {
  return (
    <>
      <button className="flex py-2 letter-spacing-button px-5 text-button rounded-lg bg-primary-100 text-white-100 hover:bg-secondary-100">
        {children}
      </button>
    </>
  )
}

export default Button
