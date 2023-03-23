import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Home from './pages/Home/Home'
import './index.css'
// import CarouselBox from "./Carousel"

const App = () => {
  return (
    <>
    <Header />
    <Sidebar />
    {/* <CarouselBox /> */}
    <Routes>
      <Route path="/" element={<Home/>}/>   
    </Routes>
    </>
  )
}

export default App 