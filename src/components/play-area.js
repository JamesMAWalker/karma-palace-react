import React from 'react'

import '../style/play-area.scss'

const PlayArea = ({ topCard, deck, burn}) => {
  return (
    <div className='play-area'>
      <div className='play-area__deck'>Deck: {deck.length} remaining</div>
      <div className='play-area__pile'>Pile: {topCard}</div>
      <div className='play-area__burned'>Burn Pile: {burn.length} burned</div>
    </div>
  );
}

export default PlayArea
