// ~ KARMA PALACE | Game Flow ~ //


// + 1) On pageload
  {/*
    # Shows user a signin form.
  */}

// + 2) On user signin
  {/*
    # Signin submit.pings /roomSetup, which returns an ID generated from the player's chosen name and a number generation function. 
    # On the .then() from /roomSetUp, we set the userID and roomID to the response from the API. 
    // > Set the roomID in the client view and hide the username form (this will be accomplished via client side routing).
    # We also need to call startLobbyStatusPing() from this initial .then(), which in turn pings /lobbyStatus in the API.
      ? /lobbyStatus returns res.json(lobby), but at this point, isn't lobby an empty object?I guess it probably gets set somewhere down the line, and since this function is called every second it eventually gets called with some actual content. 
    # In the .then() for the /lobbyStatus, we set currently open games in the client view to an empty string. 
    # Next we check if the content type !includes 'text' and if there is content in the response (the res.json(lobby)) - if so, then we inject a <p> element into the client view that says 'Join a game:'.
    # Below this is the logic that inserts any existing games. Uses a for/in loop to generate an <a> with the class 'join-link', and an href of '#'. We also generate a <p> with the player's name as the displayed content, and then give it a data-roomID attribute set to the game's ID. This is then inserted into the dom using appendChild.
    # We then add event listeners to each of the links generated in the last step. 
  */}

// + 1) On join game click
  {/*
    # CLicking a game link makes a post request to 
    '/join', with the clicked element's roomID as well as the user's userID.
    # The API then extracts the room and user IDs from the request, and creates a roomJoined boolean switch, which it sets to false. 
    # It then checks the rooms object to see if there is a room with the provided roomID. 
    # If the room does exist, then we check if the room's capacity is met. If still less than 5, then we set the current user's curRoom to the roomID we've been using. 
    # We then call the current room's userJoin() method, passing in the userID and the user's 'name' property. 
    # As a clean up, we delete the room that the user created when they loaded the website. 
    # We then push an array of the user's ID and name into the lobby object, and set the roomJoined switch to true. 
    # Finally we send back a json object containing the data from the currently joined room. 

    # In the .then() from the /join ping, we extract the roomJoined and once again check if this room exists. If so, then we push the room's ID to the DOM and call both exitLobby() and startRoomStatusPing(). 
      ^ exitLobby() calls clearInterval() to stop the lobbyStatusPing() and hides hides the game-lobby while revealing the gameboard.
  */}

// + 1) On room join from API
  {/*
    # If everything is successful in /join, then the startRoomStatusPing() function gets called. This is another setInterval function that gets called every 2 seconds.
    # This function makes a .get() request to 
    /roomStatus, along with the roomID and userID as parameters. 
    # /roomStatus checks that the inputs are not null, and then uses res.json() with the current room's getRoomStatus() as the argument. This will be a JSON object that containst he roomID, curUsers, curGame, prevLoster, and gameStarted (time).
    # After the response is sent back, the API also reset's the user's lastConnected property to the current moment in time. 
    # Finally the route calls res.end() to terminate the response process without any further data. 

    # From the response objecty returned by /roomStatus, we extract the curUsers and gameEnded property (I'm not sure that this is returned from this route, but we'll see). 
    # If gameEnded is true, then we call a showLobby() function (not yet written, but I assume it uses classes to change the dom). 

    // ! The game logic and interactions take over from this point. Work the above into the react code and then work on the rest of the game from there.
  */}



