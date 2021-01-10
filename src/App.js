import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GameProvider from './context.js'

import PageLayout from './components/page-layout'
import Game from './components/game'
import SignIn from './pages/signin'
import Lobby from './pages/lobby'

import './style/base.scss'

// Page Routes
const routes = [
  { path: '/', Component: SignIn },
  { path: '/lobby', Component: Lobby },
  { path: '/game', Component: Game },
];

const App = () => {

  return (
    <GameProvider>
      <div className='App'>
        <PageLayout>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </PageLayout>
      </div>
    </GameProvider>
  );
}

export default App
