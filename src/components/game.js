import React from 'react'

import Player from './player'

import '../style/game-area.scss'
import PlayArea from './play-area'

const players = [
  { 
    hand: ['?', '?', '?'],
    faceUp: ['Ace of Hearts', 'Joker', '3 of Spades'],
    faceDown: ['?', '?', '?'],
  },
  { 
    hand: ['?', '?', '?'],
    faceUp: ['Ace of Hearts', 'Joker', '3 of Spades'],
    faceDown: ['?', '?', '?'],
  },
  { 
    hand: ['?', '?', '?'],
    faceUp: ['Ace of Hearts', 'Joker', '3 of Spades'],
    faceDown: ['?', '?', '?'],
  },
  { 
    hand: ['?', '?', '?'],
    faceUp: ['Ace of Hearts', 'Joker', '3 of Spades'],
    faceDown: ['?', '?', '?'],
  },
]

const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pile = { topCard: 'Ace of Spades', pile: [12, 13, 14]}

const burnPile = [15, 16]

const Game = () => {
  return (
    <div className='game-area' >
      {players.map((op, idx) => (
        <Player
          id={idx + 1}
          playerNum={idx + 1}
          hand={op.hand}
          faceUp={op.faceUp}
          faceDown={op.faceDown}
        />
      ))}
      <PlayArea topCard={pile.topCard} deck={deck} burn={burnPile} />
    </div>
  );
}

export default Game
