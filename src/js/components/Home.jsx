import React from "react";

const todoList = ["Grocery shopping", "Do Laundry", "Meal Prep","Finish Coding Projects"]

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<input type="text"/><button>Click me</button>
            {todoList.map(
				(item)=>{
					return (<div>
						<li>{item}</li>
					</div>)
				}
			)
			}

		</div>
	);
};

export default Home;