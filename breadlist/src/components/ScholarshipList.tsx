import ListGroup from "./ListGroup";
function Scholarshiplist(){
  let items = ["Title","Description","Value"];
  const handleSelectItem = (item:string) => { console.log(item);}
  return(
    <div>
      <ListGroup items={items} heading="Sponsers" onSelectItem={handleSelectItem}/>
    </div>
  )
}
export default Scholarshiplist;