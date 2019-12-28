import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from '../pages'
import { Header, Footer } from '../containers'
import './app.scss'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route path="/login">
        <Login />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
