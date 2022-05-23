import React from "react";
import styles from "./taskApp.module.css";

const TaskApp = ({title, id, status, handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  const handleDeleteFn =()=> {
    handleDelete(id);
  };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <input type="checkbox"/>
     <h3>{title}</h3>
     <button class="button" onClick={handleDeleteFn}>Delete</button>
    </div>
  );
};

export {TaskApp} ;
