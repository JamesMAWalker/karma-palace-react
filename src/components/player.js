import React, { useState } from 'react';

import '../style/players.scss';

const Player = ({ id, playerNum, playerName, hand, faceUp, faceDown }) => {
  const [name, setName] = useState({ playerName });
  const [cards, setCards] = useState({
    hand: [],
    faceUp: [],
    faceDown: [],
  });

  // const playCard = (card) => {
  //   console.log(`${card} is played by ${name}.`);
  // };

  // const drawCard = (card) => {
  //   cards.hand.push(card);
  //   console.log('a card is drawn.');
  // };

  // const pickUpDeck = () => {
  //   console.log('a deck is picked up.');
  // };

  // const swapCards = () => {
  //   console.log('some cards are swapped.');
  // };

  return (
    <>
      <div className={`player-space player-${playerNum} opponent`} id={id}>
        <div className='opponent__name'>
          Waiting for player {playerNum} to join...
        </div>
        <div className='opponent__hand'>
          HAND: {hand.map((card) => `/ ${card} /`)}
        </div>
        <div className='opponent__cards'>
          <p>FACE DOWN: {faceDown.map((card) => `/ ${card} /`)} </p>
          <p>FACE UP: {faceUp.map((card) => `/ ${card} /`)}</p>
        </div>
      </div>
    </>
  );
};

export default Player;
