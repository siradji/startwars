import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Importing Components for Routes
import Character from './views/character/Character'
import Home from './views/home/Home'
import Dashboard from './views/dashboard/Dasboard'
import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={Dashboard} />
        <Route path="/people:peopleid" component={Character} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
