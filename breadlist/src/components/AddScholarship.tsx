import FillFormDesc from "./FillFormDesc";
import FillFormName from "./FillForm";




function addScholar() { 
  return <><div className = "prim" id='addDonor'>
    <form>
        <label className="Wee">
          Description:
          <input id = "des"type="text" className="Description" />
          <style>
          background-color: #f1f1f1;
          </style>
        </label>
        <input type="submit" value="Submit" />
      </form>
    <form >
        <label className="Title">
          Title:
          <input type="text" className="Name" />
        </label>
        <input type="submit" value="Submit" />
      </form>




      <div>
        <button type="submit" className="Submit">Submit</button>
    </div>

</div>
<div id = "overflow"></div>
</>


}


export default addScholar;