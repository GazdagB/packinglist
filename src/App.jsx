
import "./App.css"

import Header from './components/Header/Header'
import AddInput from './components/AddInput/AddInput'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import { useState } from "react"


const PackingList = () => {

  const [items,setItems] = useState([]);


  function handleToggleItem(id){
    setItems(items => items.map(item => item.id === id ? {...item,packed: !item.packed}: item))
  } 

  const handleDeletItem = (id)=> {
    setItems((items => items.filter(item=> item.id !== id)))
  }
  
  return (
    <div className='PackingList d-flex flex-column'>
        <Header />
        <AddInput setItems={setItems} />
        <List handleToggleItem={handleToggleItem} onHandleDeleteItem={handleDeletItem} items={items}/>
        <Footer items={items} />
    </div>
  )
}

export default PackingList


