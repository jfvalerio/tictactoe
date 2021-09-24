import type { NextPage } from 'next'
import Head from 'next/head'
import Board from '../components/Board'

// Index Page
const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen p-8'>
      <Head>
        <title>TicTacToe</title>
        <meta name='description' content='A tic-tac-toe game' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Board />
    </div>
  )
}

export default Home
