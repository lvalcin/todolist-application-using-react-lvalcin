import React, {useState} from "react";

// const listArray = ["Grocery shopping", "Do Laundry", "Meal Prep","Finish Coding Projects"]


//create your first component
const Home = () => {
	const [listArray, setListArray]=useState(["Grocery shopping", "Do Laundry", "Meal Prep","Finish Coding Projects"])
	const deleteItem = (itemToDelete) => {
		setListArraylistArray.filter((item)=> item !==itemToDelete)}
	
	return (
		<div className="text-center">
			<h1>To-Do List</h1>
			<ul>
            {listArray.map(
				(item)=>{
					return (
					<div className= "container border p-2 fs-3 text fw-light">
						<li>{item}</li>
					</div>)
				})
			}
			</ul>
			<input 
				type="text"
				onKeyDown={
				(e)=>{
					if(e.key==='Enter'){
						const newListArray = [...listArray,e.target.value]
						setListArray(newListArray)
					}		
				}
				}
			/>
			<button>Click me</button>

		</div>
	);
};

export default Home;