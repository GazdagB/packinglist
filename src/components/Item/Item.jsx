/* eslint-disable react/prop-types */
import "./Item.css";

const Item = ({ item, onHandleDeleteItem, handleToggleItem }) => {
  return (
    <li className={"lead fw-medium d-flex align-items-center"}>
      {" "}
      <input
        value={item.packed}
        onChange={() => {
          handleToggleItem(item.id);
        }}
        type="checkbox"
        name=""
        id=""
      />{" "}
      <span  style={item.packed ? {textDecoration: "line-through"}: {}}>
        {item.quantity} {item.description}
      </span>
      <div
        onClick={() => onHandleDeleteItem(item.id)}
        className="ms-2"
        style={{ cursor: "pointer" }}
      >
        ❌
      </div>
    </li>
  );
};

export default Item;
