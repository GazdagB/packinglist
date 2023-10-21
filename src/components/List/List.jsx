/* eslint-disable react/prop-types */
import Item from "../Item/Item"
import "./List.css"

const List = ({items,onHandleDeleteItem,handleToggleItem}) => {
  return (
    <div className="List">

    
    <ul className="pt-5 gap-5">
      {
        
        items.map((item)=> {
          return(
            <Item handleToggleItem={handleToggleItem} onHandleDeleteItem={onHandleDeleteItem} key={item.id} item={item} />
          )
        })
      }
    </ul>
    </div>
  )
}

export default List