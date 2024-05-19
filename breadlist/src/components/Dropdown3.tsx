import {useState} from 'react';

function Dropdown3() {


  const [index, setIndex] = useState("Gender");


  return (
    <div className="dropdown">
    <button className="dropbtn" id="BTN3">{index}</button>
    <div className="dropdown-content" id="Drop3">
      <button onClick={() =>  {setIndex("Male")}}>Male</button>
      <button onClick={() =>  {setIndex("Female")}}>Female</button>
      <button onClick={() =>  {setIndex("Transgender")}}>Transgender</button>
      <button onClick={() =>  {setIndex("Gender neutral")}}>Gender neutral</button>
      <button onClick={() =>  {setIndex("Non-Binary")}}>Non-Binary</button>
      <button onClick={() =>  {setIndex("Two-Spirit")}}>Two-spirit</button>
      <button onClick={() =>  {setIndex("Other")}}>Other</button>
    </div>
  </div>
  );
}
export default Dropdown3;