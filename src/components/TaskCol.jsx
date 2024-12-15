import React from 'react'
import TaskCard from './TaskCard';
import  "./TaskCol.css";

const TaskCol = ({title,icon, tasks, status, handleDelete}) => {
 
  return (
    <section className='task_col'>
        <h2 className='task_col_heading'>
            <img className="task_col_icon" src={icon} alt=""/>{title}
        </h2>
        {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <TaskCard
                            key={index}
                            title={task.task}
                            tags={task.tags}
                            handleDelete={handleDelete}
                            index={index}
                        />
                    )
            )}
    </section>
  )
}

export default TaskCol
