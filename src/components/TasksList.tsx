import * as React from 'react';

import {Task} from "../types/taskType";
import {ActionType} from "../types/stateType";
import {useContext} from "react";
import {ContextApp} from "./App";

const TasksList: React.FC = () => {

    const {state, changeState} = useContext(ContextApp);

    const removeTask = (taskForRemoving: Task) => {
        changeState({type: ActionType.Remove, payload: taskForRemoving})
    }
    const toggleReadiness = (taskForChange: Task) => {
        changeState({type: ActionType.Toggle, payload: taskForChange})
    }

    return (
        <>
            <ul id = 'left'>
                <h3>TO DO</h3>
                {state.tasks.map((task,i)=>(
                    <li key={i} className={task.isDone ? 'ready' : null}>
                        <div id='elem' onClick={()=>toggleReadiness(task)} className="task-name">
                            <input id='qwe' type="checkbox" onChange={()=>toggleReadiness(task)} checked={task.isDone}/>
                            {' ' + task.name}
                        </div>
                        <div>
                            <button className='remove-button' onClick={()=>removeTask(task)}>
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TasksList;
