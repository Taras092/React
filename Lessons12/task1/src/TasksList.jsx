import React, { Component } from 'react';
import Task from './Task';

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
    const sortedList = tasks.slice().sort((a, b) => a.done - b.done);

    return (
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={handleTaskStatusChange}
              onDelete={handleTaskDelete}
            />
          ))}
        </ul>
    );
  }


export default TasksList;
