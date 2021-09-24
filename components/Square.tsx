type Props = {
  value: string
  onClick: any
}

// Component for the individual squares in the board
const Square = ({ value, onClick }: Props) => {
  return (
    <div>
      <button
        className='w-full h-full text-5xl border border-black hover:bg-gray-100'
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}

export default Square
