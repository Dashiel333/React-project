import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ImageMain from "./components/ImageMain";
import TextMain from "./components/TextMain";
import Reviews from "./components/Reviews";
import ImageFooter from "./components/ImageFooter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <ImageMain />
      <TextMain />
      <Reviews />
      <ImageFooter />
      <Footer />
    </>
  );
}

export default App;
