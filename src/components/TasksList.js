import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TasksList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <React.Fragment key={task.id}>
          <li>
            {task.text}
            <FaTrash style={{'color': '#ff0000', 'marginLeft': '10px',
  } } onClick={() => 
              {deleteTask(task.id);}}/>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default TasksList;