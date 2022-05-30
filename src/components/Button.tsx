import React from 'react'
import ButtonInterface from '../interface/IButton'

const Button: React.FC<ButtonInterface> = ({ children }) => {
  return (
    <>
      <button className="flex py-2 px-4 rounded-xl bg-primary-100 text-white-100 hover:bg-secondary-100">
        {children}
      </button>
    </>
  )
}

export default Button
