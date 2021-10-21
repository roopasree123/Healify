import React , {useState} from "react";
import EditTask from "../modals/EditTask";

import styles from "./MilestonesHome.module.css";
 const Card = ({taskObj , index ,deleteTask,updateListArray}) => {
     const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#7FFFD4",
            secondaryColor : "#00FFFF"
        },
        {
            primaryColor : "#FF1493",
            secondaryColor : "#FF00FF"
        },
        {
            primaryColor : "#98FB98",
            secondaryColor : "#00FA9A"
        },
        {
            primaryColor : "#800080",
            secondaryColor : "#DDA0DD"
        },
        {
            primaryColor : "#FFD700",
            secondaryColor : "#F0E68C"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }
     const updateTask = (obj) => {
        updateListArray(obj, index)
    }

     const handleDelete = () => {
        deleteTask(index)
    }
        return (
         <div className = {styles["card-wrapper"]  + " " +"mr-5"} >
            <div className = {styles["card-top"] } style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = {styles["task-holder"]} >
                <span className = {styles["card-header"]} style={{"background-color": colors[index%5].secondaryColor, "border-radius": "15px"}}>{taskObj.titleName}</span>
               <h6 className = "mt-1">{taskObj.Date}</h6>
                <p className = "mt-2">{taskObj.Description}</p>
                <br />
                < div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                      <i class = "far fa-edit  " style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    
                </div>
                < div style={{"position": "absolute", "right" : "50px", "bottom" : "20px"}}>
                <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}}  onClick = {handleDelete} ></i>
                </div>
                 <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
                </div>
                   

         </div>

            

       
    );
    
}
export default Card;