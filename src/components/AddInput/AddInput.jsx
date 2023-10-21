/* eslint-disable react/prop-types */
import "./AddInput.css";
import { useState } from "react";

const AddInput = ({ setItems, }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  const handleAddItems = ()=>{
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setItems(prev => [...prev, newItem]);
  }  

  const resetInputStates = () => {
    setDescription("");
    setQuantity(1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    
    handleAddItems(); 
    resetInputStates();
    
  }

  //Change options length here...
  const optionsLength = 20;

  const options = [];
  for (let i = 1; i < optionsLength; i++) {
    options.push(
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    );
  }

  return (
    <div className="AddInput d-flex justify-content-center align-items-center">
      {/* Selectinput field with dynamic options */}
      <form
        onSubmit={handleSubmit}
        className=" w-50 d-flex justify-content-center align-items-center gap-2"
        action=""
      >
        <p className="lead fw-bold m-0">What do you need for your trip? 🧳</p>
        <div className="">
          <select
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option defaultValue value={1}>
              1
            </option>
            {options}
          </select>
        </div>

        <input
          className="input-text"
          type="text"
          name=""
          id=""
          placeholder="Item..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit" className="">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddInput;
