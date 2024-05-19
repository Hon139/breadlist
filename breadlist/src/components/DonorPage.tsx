import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Submit from './Submit';
import {useState} from 'react';


interface Props{
  OnSubmit2: (gender:string, extra:string, age:string) => void;
}

function DonorPage({OnSubmit2}:Props) { 

  const [index, setIndex] = useState("Age");
  const [index2, setIndex2] = useState("Ethnicity");
  const [index3, setIndex3] = useState("Gender");

  return <><div className = "prim" id='StudentPage'>
  <div className="Section1"/>
  <div className="dropdown">
  <button className="dropbtn" id="BTN3">{index3}</button>
  <div className="dropdown-content" id="Drop3">
    <button onClick={() =>  {setIndex3("Male")}}>Male</button>
    <button onClick={() =>  {setIndex3("Female")}}>Female</button>
    <button onClick={() =>  {setIndex3("Transgender")}}>Transgender</button>
    <button onClick={() =>  {setIndex3("Gender neutral")}}>Gender neutral</button>
    <button onClick={() =>  {setIndex3("Non-Binary")}}>Non-Binary</button>
    <button onClick={() =>  {setIndex3("Two-Spirit")}}>Two-spirit</button>
    <button onClick={() =>  {setIndex3("Other")}}>Other</button>
  </div>
</div>

  <div className="dropdown">
  <button  className="dropbtn" id="BTN2">{index2}</button>
  <div className="dropdown-content" id="Drop2">
    <button onClick={() =>  {setIndex2("North American")}} >North American</button>
    <button onClick={() =>  {setIndex2("African")}}>African</button>
    <button onClick={() =>  {setIndex2("European")}}>European</button>
    <button onClick={() =>  {setIndex2("Asian")}}>Asian</button>
    <button onClick={() =>  {setIndex2("Latin, Central, South America")}}>Latin, Central, South America</button>
    <button onClick={() =>  {setIndex2("Other")}}>Other</button>
  </div>
</div>
  
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

  <div>
      <button onClick={()=> OnSubmit2(index3,index2,index)} type="submit" className="Submit">Submit</button>
  </div>
</div>
<div id = "overflow"></div>
</>



}


export default DonorPage;
