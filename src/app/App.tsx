import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, Register, AssociateAccount, Verify, Search, Profile } from '../pages'
import { Header, Footer } from '../containers'
import './app.scss'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>

      <Route path="/associate-account">
        <AssociateAccount />
      </Route>

      <Route path="/verify">
        <Verify />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
