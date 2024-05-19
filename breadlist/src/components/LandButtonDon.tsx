
import { useNavigate } from 'react-router-dom'; 

function LandingButtonDon(){
    let navigate = useNavigate();
    return <button onClick={() => {navigate("/Donor")}
    
    
    } type="button" className="landbtn" id = "don" > Award Donor Portal </button>
}

export default LandingButtonDon; 
