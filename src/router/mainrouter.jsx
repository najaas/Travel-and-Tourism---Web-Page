import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../page/Home'

const mainrouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default mainrouter