import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { Button } from '../components'
import './app.scss'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button type="gradient" size="large">Register</Button>
          <p>
            Deep Learning-based Chemical Graphics Analysis Platform
          </p>
          <Link to="/user">to UserPage</Link>
          <Route path="/user">
            UserPage.....
        </Route>
          <Link to="/">HomePage</Link>
        </header>
      </div>
    </Router>
  )
}

export default App
