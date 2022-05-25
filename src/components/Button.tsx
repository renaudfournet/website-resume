import ButtonInterface from '../interface/IButton'

const Button: React.FC<ButtonInterface> = ({ children, color, background }) => {
  return (
    <>
      <button
        style={{ color: color, backgroundColor: background }}
        className="flex font-bold py-2 px-4 border rounded-xl"
      >
        {children}
      </button>
    </>
  )
}

export default Button
