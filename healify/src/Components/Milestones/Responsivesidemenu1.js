import React, {useState} from "react";
import CreateTask from "../modals/CreateTask";
import styles from "./ResponsiveSidemenu1.module.css";
import { Link } from "react-router-dom";
export const Responsivesidemenu1 =({createTask}) => {
     const [modal, setModal] = useState(false);
  // const [taskList, setTaskList] = useState([]);
  const toggle = () => setModal(!modal);
  const saveTask = () => {
    createTask();
    setModal(false);
  };
    return(
        <div className={styles.mybody}>
        <div className={styles["main-menu"]}>
            <br/>
            <br/>
            <br/>
            <br/>
        <ul>
                <Link to="/MilestonesHome"> 
                <li className={styles["menu-item"]}> <a href="#">
                  <i class="fas fa-home"></i> &nbsp; &nbsp;Home
                </a></li>
                </Link>
                <Link to= "/Timeline">
                <li className={styles["menu-item"]}>
                   
                <a href="#">
                  <i class="fas fa-list-alt"></i>&nbsp; &nbsp;&nbsp;Achievements
                </a>
               
                </li>
                </Link>
                  <li className={styles["menu-item"]}>
              <a href="#">
                <i class="fas fa-blog"></i>&nbsp; &nbsp;&nbsp;About
              </a>
            </li>
             <li className={styles["menu-item"]}>
              <a href="#">
                 <i class="fas fa-plus-square" onClick={() => setModal(true)}></i>&nbsp; &nbsp;&nbsp;Create New
              </a>
            </li>
              
        </ul>
    </div>
          <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </div>
    );
}