import React, { useState } from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplus } from '@fortawesome/free-solid-svg-icons'


function RenderItemsList() {
  const itemsList = [{
    item: 'bananas',
    quantity: 2,
    crossed: false,
  }];
    const plusSign = <FontAwesomeIcon icon={faplus} />
  const list = itemsList.map((e) => {
      return (
        <ul>
          <li>{e.item}<button>{plusSign}</button>{e.quantity}<button>-</button><button>del</button></li>
        </ul>
      )
    }
  )
  return (
    <div>
      {list}
    </div>
  )
}
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="listApp">
    <h1>Shopping List</h1>
  <form>
    <label>Add Stuff:<br />
    <input type="text" /> 
    <button className="addBtn">Add</button>
    </label>
  </form>
  <div className="listItems">
    <RenderItemsList />
  </div>
  </div>
    );
  }
}

export default ShoppingList;
