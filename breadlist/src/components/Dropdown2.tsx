import {useState} from 'react';
function Dropdown2() {
  const [index, setIndex] = useState("Ethnicity");
  return (
    <div className="dropdown">
    <button  className="dropbtn" id="BTN2">{index}</button>
    <div className="dropdown-content" id="Drop2">
      <button onClick={() =>  {setIndex("North American")}} >North American</button>
      <button onClick={() =>  {setIndex("African")}}>African</button>
      <button onClick={() =>  {setIndex("European")}}>European</button>
      <button onClick={() =>  {setIndex("Asian")}}>Asian</button>
      <button onClick={() =>  {setIndex("Latin, Central, South America")}}>Latin, Central, South America</button>
      <button onClick={() =>  {setIndex("Other")}}>Other</button>
    </div>
  </div>
  );
}
export default Dropdown2;