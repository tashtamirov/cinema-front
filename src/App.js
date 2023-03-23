import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from './pages/Home/Home'
import LoginPage from "./pages/Login/loginPage"
import OnePage from "./pages/onePage/OnePage"
import RegisterPage from "./pages/Register/RegisterPage"

const App = () => {
  return (
    <>
    {/* <Header />    */}
    <Routes>
      <Route path="/" element={<Home/>}/>  
      <Route path= "/loginPage" element={<LoginPage/>}/> 
      <Route path="/registerPage" element={<RegisterPage/>} />   
      <Route path="/OnePage/:onePageId" element={<OnePage/>} />
    </Routes>
    </>
  )
}

export default App  