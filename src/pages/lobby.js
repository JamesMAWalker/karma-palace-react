import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { GameContext } from '../context'

import '../style/lobby.scss'

// const gamesPlaceholder = [
//   { host: 'Player 1', numJoined: 2, cap: 4 },
//   { host: 'Player 3', numJoined: 1, cap: 5 },
//   { host: 'Player 4', numJoined: 2, cap: 3 },
// ]

const Lobby = () => {
  // Pulling methods and state values from global state (aka - context) 
  const { 
    startLobbyStatusPing, 
    userID, 
    roomID, 
    name,
    openGames, 
    joinRoom 
  } = useContext(GameContext)
  // Boolean switch setter and state for user hosting status
  const [hosting, setHosting] = useState(false)

  // when this component is loaded by the client, useEffect will run code in its callback fn body
  useEffect(() => {
    startLobbyStatusPing()
  }, [])

  return (
    <div className='lobby'>
      <div className='lobby__header'>
        <h1>Game Lobby</h1>
      </div>
      <div className='lobby__player container'>
        <h4>Players Currently in Lobby</h4>
        <div className='list'>
          {/* Placeholder players */}
          <div className='player'>Player 1</div>
          <div className='player'>Player 2</div>
          <div className='player'>Player 3</div>
          <div className='player'>Player 4</div>
          <div className='player'>Player 5</div>
          <div className='player'>Player 6</div>
          <div className='player'>Player 7</div>
        </div>
      </div>
      <div className='lobby__games container'>
        <h4>List of Open Games</h4>
        <div className='list'>
          {openGames.length > 0 ? (
            openGames.map(game => (
              <div 
                className='game' 
                data-roomID={game[0][0]} 
                key={game[0][0]}
                onClick={(e) => joinRoom(e)}
              >
                <span>{game[0][1]}'s game</span>
                <span>
                  numJoined / cap
                </span>
              </div>
            ))
          ) : (
            <div className='no-games'>No current games. Host one!</div>
          )}
          {/* gamesPlaceholder.map(({ host, numJoined, cap }, idx) => (
            <div className='game' key={host + idx}>
              <span>{host}'s game</span>
              <span>
                {numJoined}/{cap}
              </span>
            </div>
          )) */}
        </div>
      </div>
      <div className='lobby__current-player container'>
        {!hosting ? (
          <>
            <h4>{name ? name : 'Anon'}'s Room</h4>
            <div className='details'>
              <div>
                <strong>UserID</strong>
                <br /> {userID ? userID : '333'}
              </div>
              <div>
                <strong>Room ID</strong>
                <br /> {roomID ? roomID : '333'}
              </div>
              <div>
                <button>Host a Game</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h4>{name}'s Room</h4>
            <div className='details'>
              <div>
                <strong>UserID</strong>
                <br /> {userID}
              </div>
              <div>
                <strong>Room ID</strong>
                <br /> {roomID}
              </div>
              <div>
                <button>Host a Game</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Lobby
