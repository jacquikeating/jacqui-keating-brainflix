import { useState } from 'react'
import './App.css'
import Header from '/src/components/Header/Header.jsx'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Comments from './components/Comments/Comments'
import NextVideos from './components/NextVideos/NextVideos'


function App() {

  return (
    <>
    <Header />
    <VideoPlayer />
    <Comments />
    <NextVideos />
    </>
  )
}

export default App
