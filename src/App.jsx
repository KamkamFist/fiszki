import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fiszki from './fiszki.jsx'

function App() {
  const data = [
  {id: 0, question: "admin puka psa jak sra?", answer: "puka"},
  {id: 1, question: "czy pieczykolana pieka kolana?", answer: "tak"},
  {id: 2, question: "czy aron kocha mezczyzn?", answer: "oczywiscie"},
  {id: 3, question: "czy jezus jest mega sigma?", answer: "top 1 sigma"},
  {id: 4, question: "czy pies wszedl michalowi pod biurko?", answer: "razem z wlascicielka"},
  {id: 5, question: "czy godlewski lubi male dzieci?", answer: "bardzo"},
  ]


  return (
    <>
      <Fiszki data={data} />
    </>
  )
}

export default App
