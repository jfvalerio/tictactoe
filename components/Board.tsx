import { useState } from 'react'
import RefreshIcon from './RefreshIcon'
import Square from './Square'

// Component for the main game
const Board = () => {
  // States of the game
  const [boardState, setBoardState] = useState(Array(9).fill(null))
  const [message, setMessage] = useState("Player X's Turn")
  const [isXNext, togglePlayer] = useState(true)
  const [isThereWinner, toggleWin] = useState(false)

  // Function that sends a POST request to the server to check game status
  async function checkIfWin(boardState: string[]) {
    // Code for connecting to the Node.js server
    const res = await fetch('http://www.localhost:8080/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ boardState }),
    })

    // Optional code for only using Next.js as both front-end and back-end
    // const res = await fetch('/api/server', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ boardState }),
    // })

    const json = await res.json()

    // Check if there is response
    if (json.message) {
      // This is the message that will state if somebody has won or draw
      setMessage(json.message)

      // Flag to not be able to interact with the board once somebody has won or draw
      toggleWin(true)
    } else {
      // If there is no response, it is the other player's turn
      isXNext ? setMessage("Player O's Turn") : setMessage("Player X's Turn")
    }
  }

  function handleClick(index: number) {
    // Create a copy of the current board state
    const squares = boardState.slice()

    // Do nothing when there is already value in the square or the game is won or draw
    if (squares[index] || isThereWinner === true) {
      return
    }

    // Alternate adding X's and O's
    squares[index] = isXNext ? 'X' : 'O'

    // Update the board state with the recent click
    setBoardState(squares)

    // Switch to the next player
    togglePlayer(!isXNext)

    // Check if the move resulted to a win or draw
    checkIfWin(squares)
  }

  // Code that will be displayed in the browser
  return (
    <div className='space-y-2'>
      {/* The Board */}
      <div className='grid grid-cols-3 grid-rows-3 border border-black w-80 h-80'>
        {boardState.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {/* The Message and the Refresh Button */}
      <div className='flex items-center px-2'>
        <h1 className='flex-1 text-lg font-semibold text-gray-800'>
          {message}
        </h1>
        <button
          className='w-6 h-6 text-gray-800 hover:text-gray-600'
          onClick={() => {
            setBoardState(Array(9).fill(null))
            setMessage("Player X's Turn")
            togglePlayer(true)
            toggleWin(false)
          }}
        >
          <RefreshIcon className='w-full h-full' />
        </button>
      </div>
    </div>
  )
}

export default Board
