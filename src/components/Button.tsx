import React from 'react'
import ButtonInterface from '../interface/IButton'

const Button: React.FC<ButtonInterface> = ({ children, color, background }) => {
  return (
    <>
      <button className="flex py-2 px-4 rounded-xl bg-primary-100 text-white-100 hover:bg-sky-700">
        {children}
      </button>
    </>
  )
}

export default Button
