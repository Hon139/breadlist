
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import LandingPage from './components/LandingPage';
import ErrorPage from "./components/ErrorPage";
import StudentPage from "./components/StudentPage";
import DonorPage from "./components/DonorPage";
import ScholarshipPage from "./components/ScholarshipPage";
import AddScholarship from "./components/AddScholarship";
import "./App.css";

function App(){
  const handleSubmit = (gender:string, extra:string, age:string) => {
    //findListings(age, extra, gender);
    console.log(age + extra + gender);
  }
  const handleSubmit2 = (gender:string, extra:string, age:string) => {
    // console.log(gender);
    console.log(gender + extra + age);
  }
  const handleSubmit3 = (title:string, extra:string, value:string) => {
    // console.log(gender);
  }

  
  return <Router>
    <nav>
      <Link to ="/" id = "landingLink"> Landing Page</Link>
      <Link to ="/create" id = "landingLink"> Create </Link>
    </nav>
      <Routes>
        <Route path ="/" element = {<LandingPage/>}></Route>
        <Route path ="/LandingPage" element = {<LandingPage/>}></Route>
        <Route path ="/donor" element = {<DonorPage OnSubmit2 = {handleSubmit2}/>}></Route>
        <Route path ="/student" element = {<StudentPage onSubmit = {handleSubmit}></StudentPage>}></Route>
        <Route path ="/list" element = {<ScholarshipPage/>}></Route>
        <Route path ="/create" element = {<AddScholarship ></AddScholarship>}></Route>
        <Route path ="*" element = {<ErrorPage/>}></Route>
      </Routes>

  </Router>
}

export default App; 
