import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Login,
  Register,
  AssociateAccount,
  Verify,
  Search,
  Profile,
  Setting,
  History,
  HomePage,
  Product,
} from '../pages'
import { Header, Footer } from '../containers'
import './app.scss'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/products" exact>
        <Product />
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>

      <Route path="/associate-account" exact>
        <AssociateAccount />
      </Route>

      <Route path="/verify" exact>
        <Verify />
      </Route>

      <Route path="/search" exact>
        <Search />
      </Route>

      <Route path="/profile" exact>
        <Profile />
      </Route>

      <Route path="/setting" exact>
        <Setting />
      </Route>

      <Route path="/history" exact>
        <History />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
