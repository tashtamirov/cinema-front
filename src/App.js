import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Home from './pages/Home/Home'
import './index.css'
// import UncontrolledExample from "./components/carousel/Carousel"
import { Button } from "react-bootstrap"
import Main from "./components/main/Main"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      {/* <UncontrolledExample /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App 