import {useState} from "react";
import {data} from "./data.js";
import "./App.css"

function App() {

const [gifts, setGift] = useState(data);

const removeItem = (id) => {
  const array = gifts.filter(gift => gift.id !== id);
setGift(array);
} 
  return(
    <div>
       <div className="container">
              <h1>Wish list of the {gifts.length} gifts.</h1>
            </div>
      {gifts.map((element => {
        const {id, gifty, image} = element;
        return(
          <div key={id}>
           
            <div className="container">
          <h2>{id} - {gifty}</h2>
          </div>
          <div className="container">
          <img src={image} width="300px" height="280px" alt="gift"/>
          </div>
          <div className="container">
            <button className="btn" onClick={() => removeItem(id)}>REMOVE</button>
          </div>
            </div>
        )
      }))}
      <div className="container">
  <button className="btnTwo" onClick={() => setGift([])}>DELETE ALL</button>
      </div>
    </div>
  )
}
export default App;