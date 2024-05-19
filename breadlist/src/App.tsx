
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import LandingPage from './components/LandingPage';
import ErrorPage from "./components/ErrorPage";
import "./App.css";
function App() { 
  return <Router>
    <a href = ""></a>
      <Routes>
        <Route path ="/" element = {<LandingPage/>}></Route>
        <Route path ="/donor" element = {<LandingPage/>}></Route>
        <Route path ="/student" element = {<LandingPage/>}></Route>
        <Route path ="*" element = {<ErrorPage/>}></Route>
      </Routes>

  </Router>
}

export default App; 