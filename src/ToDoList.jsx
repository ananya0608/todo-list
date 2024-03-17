import React, { useState } from "react";
import Button from '@mui/material-next/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from "./ListCom";
import ListEdit from "./ListEdit";


const ToDoList = () => {
    const[ item, setItem]= useState("");
    const[newitem, setNewItem] = useState([]);


    const itemEvent = (event) => {
    setItem(event.target.value);
        
    };

    const listOfItems = () =>{
        if(item!=""){
            setNewItem((prevValue) => {
                return [...prevValue,item];
                });
        }
        else
        alert("Please add an item")
        setItem("");
     
    };
    return(
    <>
        <div className="main_div">
            <div className="center_div">
            <br/>
            <h1>ToDo List </h1>
            <br/>
            <input type="text"  value={item} placeholder="Add an Items" onChange={itemEvent}/>
            <button className ="newBtn" onClick= {listOfItems}> <AddIcon />
             </button>
            <br/>

            <ol>
                
             {   newitem.map((val, index) =>{
                    return <ListCom key= {index} text ={val}/>;
                } )}
            </ol>
            <br/>


            </div>
        </div>
    </>
    );

}

export default ToDoList;