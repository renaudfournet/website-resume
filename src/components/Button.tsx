import ButtonInterface from '../interface/button'

const Button: React.FC<ButtonInterface> = ({ border, children, color }) => {
  return (
    <>
      <button
        style={{ borderColor: border, color: color }}
        className="flex font-bold py-2 px-4 border rounded"
      >
        {children}
      </button>
    </>
  )
}

export default Button
