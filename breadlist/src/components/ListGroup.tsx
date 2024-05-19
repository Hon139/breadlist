import {MouseEvent} from 'react';
import {useState} from 'react';
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}
function ListGroup({items,heading,onSelectItem}: Props) {
  const [selectedIndex,setSelectedIndex] = useState(-1);

  return(
    <>
    <h1>List</h1>
    {items.length === 0 && <p>No items</p>}
    <ul>
      {items.map((item, index) => (
        <li key={item} className={selectedIndex===index?'list-group-item active' : 'list-group-item'} onClick={() => {setSelectedIndex(index); onSelectItem(item);}}>

        </li>
      ))}
    </ul>
    </>
  )
}
export default ListGroup;

