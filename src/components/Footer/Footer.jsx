/* eslint-disable react/prop-types */
import './Footer.css'

const Footer = ({items}) => {

  let packedItems = 0;
  items.map(item =>{
    if(item.packed){
      packedItems++
    }
  })

  let percentage = Math.round(((packedItems/items.length) *100));
  if (isNaN(percentage)) {
    percentage = "0";
  }

  return (
    <div className="footer d-flex align-items-center justify-content-center">
      <p className="lead fw-bold" style={{fontSize:"1.8rem"}}>🧳 You have {items.length} items on your list, and you already packed {packedItems} {`(${percentage}%)`}</p>
    </div>
  )
}

export default Footer