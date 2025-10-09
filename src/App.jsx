import { useState } from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import ImageMain from "./components/ImageMain";
import TextMain from "./components/TextMain";
import Reviews from "./components/Reviews";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <ImageMain />
      <TextMain />
      <Reviews />
    </>
  )
}

export default App
