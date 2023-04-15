import React from 'react'
import { Article, Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}
