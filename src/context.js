import React, { Component } from 'react';
import { withRouter } from 'react-router'
import axios from 'axios'

const GameContext = React.createContext();
const GameConsumer = GameContext.Consumer;

let lobbyIntervalKey = 0;
// let gameIntervalKey = 0;


class GameProvider extends Component {
	
  state = {
    // joinRoomComplete: false,
    // players: [],
    // deck: [],
    // pile: { topCard: '', pile: []},
		// burn: [],
		name: '',
		userID: '',
		roomID: '',
		openGames: [],
    lobbyIntervalKey: 0,
  };

  componentDidMount() {
	
	};

	playerDetailSetter = (PN, UID, RID) => {
		this.setState({ 
			name: PN,
			userID: UID,
			roomID: RID,
		})
	}

	joinRoom = (e) => {
		const targetRoomID = e.target.dataset.roomid;
		const userID = this.state;
		
    axios
      .post('/join', { targetRoomID, userID })
      .then((response) => {
        const { roomJoined } = response.data;
        if (roomJoined) {
					// TODO Not sure where this roomID node was. Find it and give it a state value that can be updated here.
          // const roomID = targetRoomID;
          // document.querySelector('#roomID').innerText = targetRoomID;
          this.exitLobby();
          this.startRoomStatusPing();
        } else {
          console.log("room doesn't exist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
	}

  startLobbyStatusPing = () => {
		const { openGames, userID} = this.state

    lobbyIntervalKey = setInterval(() => {
      axios
        .get('./lobbyStatus', {
          params: {
            userID
          },
        })
        .then((res) => {
					// % Replaced by state variable openGames
          // const openGames = document.querySelector('.game-lobby__open-games');
          // openGames.innerHTML = '';

					const responseData = res.data;

          // If response is JSON and object has rooms
          if (
            res.headers['content-type'].substring(0, 4) !== 'text' &&
            Object.keys(responseData).length > 0
          ) {
						// % Replaced by state openGames
            // const joinGame = document.createElement('p');
            // joinGame.innerText = 'Join a game:';
            // openGames.appendChild(joinGame);

						const curGames = Object.keys(responseData).map(rd => rd)
						this.setState({ openGames: curGames })

						// % Moved to lobby component as openGames.map() 
            // for (const game in responseData) {
						// 		//Put links into page
						// 		const link = document.createElement('a');
						// 		link.setAttribute('href', '#');
						// 		link.setAttribute('class', 'join-link');
						// 		console.dir(responseData);
						// 		const p = document.createElement('p');
						// 		p.innerText = responseData[game][0][1] + "'s game";
						// 		p.setAttribute('data-roomID', responseData[game][0][0]);
						// 		link.appendChild(p);
						// 		openGames.appendChild(link);
						// }

						// % Instead of adding event listeners, will add onClick attr to games when mapped in lobby component.The callback fn is broken out into joinRoom() method and made accessible to lobby via context.
						/*
							const allJoinLinks = document.getElementsByClassName('join-link');
            for (const link of allJoinLinks) {
              link.addEventListener('click', (e) => {
								const targetRoomID = e.target.dataset.roomid;
                axios
                  .post('/join', { targetRoomID, userID })
                  .then((response) => {
                    const { roomJoined } = response.data;
                    if (roomJoined) {
                      const roomID = targetRoomID;
                      document.querySelector(
                        '#roomID'
                      ).innerText = targetRoomID;
                      this.exitLobby();
                      this.startRoomStatusPing();
                    } else {
                      console.log("room doesn't exist");
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
						*/
            // }
          } else {
						// % Handled in lobby component via openGames state variable
            // const p = document.createElement('p');
            // p.innerText = 'No games in lobby. Host one!';
            // openGames.appendChild(p);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
	};
	
	startRoomStatusPing = (roomID, userID) => {
    setInterval(()=> {
        axios.get('./roomStatus', {
            params: {
                roomID,
                userID
            }
        })
        .then(res => {
            if (res.data) {
                const responseData = res.data;
								const { 
									// curUsers, 
									gameEnded 
								} = responseData;
                console.log(responseData);
                // When game has ended, show lobby
                if (gameEnded === true) {
                    // showLobby();
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, 2000);
  };

  exitLobby = () => {
    // End lobby status ping
    clearInterval(lobbyIntervalKey);
    // Switch from lobby view to game board view
    // const gameLobby = document.querySelector('.game-lobby');
    // gameLobby.classList.add('hidden');
    // const gameBoard = document.querySelector('.game-area');
    // gameBoard.classList.remove('hidden');
    this.props.history.push('/game')
  };

  render() {
    return (
      <GameContext.Provider
        value={{
					...this.state,
					playerDetailSetter: this.playerDetailSetter,
					startLobbyStatusPing: this.startLobbyStatusPing,
					startRoomStatusPing: this.startRoomStatusPing,
					joinRoom: this.joinRoom,
					exitLobby: this.exitLobby,
          // addItemToCheckout: this.addItemToCheckout,
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export { GameConsumer, GameContext };

export default withRouter(GameProvider);
