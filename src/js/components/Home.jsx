import React, {useState} from "react";

// const listArray = ["Grocery shopping", "Do Laundry", "Meal Prep","Finish Coding Projects"]


//create your first component
const Home = () => {
	const [listArray, setListArray]=useState(["Grocery shopping", "Do Laundry", "Meal Prep","Finish Coding Projects"]);
	const [inputValue, setInputValue] = useState("");
	const deleteItem = (itemToDelete) => {
		const result = listArray.filter((item)=> item !==itemToDelete)
			setListArray(result)
	}
	
	return (
		<div className="text-center">
			<h1>To-Do List</h1>
			<ul className="list-inline">
            {listArray.map(
				(item)=>{
					return (
					<div className= "container border p-2 fs-3 text fw-light">
						<li>{item}</li>
						<span onClick={()=>deleteItem (item)}>
							X
						</span>
					</div>)
			
						{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-x-square" viewBox="0 0 16 16" className="mx-2">
 	 					<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
						</svg> */}
						
					
				})
			}
			</ul>
			<input 
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}/>
			<button onClick={()=>{
          		if (inputValue.trim() !== "") {
            	setListArray((prevList) => [...prevList, inputValue]);
            	setInputValue("");}
			}}>
			Add To List
			</button>

		</div>
	);
};
// onKeyDown={
// 	(e)=>{
// 		if(e.key==='Enter'){
// 			const newListArray = [...listArray,e.target.value]
// 			setListArray(newListArray)
// 		}		
// 	}
// 	}
export default Home;