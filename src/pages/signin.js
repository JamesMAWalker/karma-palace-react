import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { GameContext } from '../context'

import '../style/signin.scss'

const SignIn = () => {
  // Access global state
  const { playerDetailSetter } = useContext(GameContext)
  // Setter and state for userName state variable (local to this component)
  const [playerName, setPlayerName] = useState('')
  // Function returns an object with method to navigate clientside routes
  const history = useHistory()

  
  const handleSubmit = (e) => {
    e.preventDefault()

    // Pings the API route with user input
    axios.get('/roomSetUp', {
      params: {
        playerName,
      },
    }).then(res => {
      // Set values in global state
      playerDetailSetter(playerName, res.data, res. data)
      // Send user to lobby page
      history
        .push({
          pathname: '/lobby',
        })
      })
      .catch((err) => {
        console.log('Failed to setup room: ', err)
        alert(`Server error! ${err.message}`)
      });
  }

  return (
    <div className='signin'>
      <h1 className='signin__header'>Karma Palace</h1>
      <form className='signin__form' action='post'>
        <label htmlFor='un-input'>Enter a Username</label>
        <div className='signin__input-container'>
          {/* onChange sets playerName as user types*/}
          <input onChange={(e) => setPlayerName(e.target.value)} id='un-input' type='text' />
          <button type='submit' onClick={handleSubmit}>&rarr;</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn
