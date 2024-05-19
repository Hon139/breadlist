import LandSubTitle from './LandSubTitle';
import LandingButtonDon from './LandButtonDon';
import LandingButtonStd from './LandButtonStd';



function LandingPage(){
    return <> 
    <div className = "landing">
        <LandSubTitle/>
    </div>
    <div className = "landingSubmission">  
        <LandingButtonDon/>
        <LandingButtonStd/>
    </div>

    </>
}

export default LandingPage; 