import React, {useState} from "react";

// const listArray = ["Grocery shopping", "Do Laundry", "Meal Prep","Finish Coding Projects"]

//create your first component
const Home = () => {
	const [listArray, setListArray]=useState(["Grocery shopping", "Do Laundry", "Meal Prep","Finish Coding Projects"])
	return (
		<div className="text-center">
			<h1>To-Do List</h1>
			<ul>
            {listArray.map(
				(item)=>{
					return (<div>
						<li>{item}</li>
					</div>)
				})
			}
			</ul>
			<input type="text" onChange={
				(e)=>
				{console.log(e.target.value)
				}
				}/>
			<button>Click me</button>

		</div>
	);
};

export default Home;