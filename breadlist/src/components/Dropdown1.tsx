import {useState} from 'react';

function Dropdown1() {
    const [index, setIndex] = useState("Age");
    return (
      <div className="dropdown">
      <button className="dropbtn" id="BTN1">{index}</button>
      <div className="dropdown-content" id="Drop1">
        <button onClick={() =>  {setIndex("12-20")}}>12-20</button>
        <button onClick={() =>  {setIndex("21-35")}}>21-35</button>
        <button onClick={() =>  {setIndex("36-45")}}>36-45</button>
        <button onClick={() =>  {setIndex("46-55")}}>46-55</button>
        <button onClick={() =>  {setIndex("56-66")}}>56-66</button>
        <button onClick={() =>  {setIndex("67+")}}>67+</button>
      </div>
    </div>
    );
  }
export default Dropdown1;