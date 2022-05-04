// import { useState } from 'react'
import './App.css'
import { Notes } from './components/fetchdata'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'


function App() {

  return (
    <div className="App">
      <Header />

      <Notes />

      <h1>hello there</h1>
          
      <Footer />
    </div>
  )
}

export default App
