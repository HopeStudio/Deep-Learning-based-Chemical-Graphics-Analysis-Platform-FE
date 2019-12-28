import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from '../containers'
import './app.scss'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  )
}

export default App
