import React, { Component } from 'react'
import Qmap from './components/QMap'
import GlobalStatement from './components/GlobalStatement'
import LocalStatement from './components/LocalStatement'
import './App.css'

//  our main class nothing special here
class App extends Component {
  render () {
    return (
      <div className="App">
        <GlobalStatement />
        <Qmap/>
        <LocalStatement />
      </div>
    )
  }
}
export default App
