import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidv4 } from "uuid";

const App = () => {

const [items, setItems] = useState([]);
	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
  	}, [items]);

const [inputValue, setInputValue] = useState('');

const handleAddButtonClick = () => {
  const newItem = {
    id: uuidv4(),
    itemName: inputValue,
    quantity: 1,
    isSelected: false,
  };
  const newItems = [...items, newItem];

  setItems(newItems);
  setInputValue('');
};
const handleQuantityIncrease = (index) => {
  const newItems = [...items];

  newItems[index].quantity++;

  setItems(newItems);
};
const handleQuantityDecrease = (index) => {
  const newItems = [...items];
  newItems[index].quantity--;
  setItems(newItems);
};
const toggleComplete = (index) => {
  const newItems = [...items];
  newItems[index].isSelected = !newItems[index].isSelected;
  setItems(newItems);
};
const handleDeleteItem = (id) => {
  const newItems = [...items];
  
  setItems(newItems.filter((el) => el.id !== id));

}; 

  return (
    <div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
										<span key={item.id} className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<span key={item.id}>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
                <button>
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteItem(item.id)} />
                </button>
							</div>
						</div>
					))}
				</div>
		</div>
    </div>
	);
};

export default App;
