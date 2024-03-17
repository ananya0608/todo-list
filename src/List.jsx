import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const List = (props) => {
    const [line, setLine ] = useState(false);
    

    const culIt = () => {
        setLine(true);
    };

    return(
        <div className ="todo_style">
            <span onClick={cutIt}>
            <DeleteIcon className="deleteIcon"/>

            </span>
        </div>
    )
}