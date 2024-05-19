
import { useNavigate } from 'react-router-dom'; 
function LandingButtonStd(){
    let navigate = useNavigate(); 
    return <button onClick={() => {navigate("/Student")}

    } type="button" className="landbtn" id = "std" >Student Award Portal</button>
}

export default LandingButtonStd; 
