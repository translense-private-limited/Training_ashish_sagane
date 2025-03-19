import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div className="container">

            <Routes>



              <Route path='/' exact Component={Home} />
              <Route path='/movie/:imdbID' Component={MovieDetails} />
              <Route path='/*' Component={PageNotFound} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
