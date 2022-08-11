import * as React from 'react';

import {Task} from "../types/taskType";
import {ActionType} from "../types/stateType";
import {useContext} from "react";
import {ContextApp} from "./App";

const TasksList: React.FC = () => {

    const {state, changeState} = useContext(ContextApp);

    // Функция удаления таски, вешается на кнопку
    const removeTask = (taskForRemoving: Task) => {
        changeState({type: ActionType.Remove, payload: taskForRemoving})
    }

    // Функция изменения состояния таски, меняет отметку и цвет(с помощью css)
    const toggleReadiness = (taskForChange: Task) => {
        changeState({type: ActionType.Toggle, payload: taskForChange})
    }

    // Список таск (TO DO), берет все таски из массива и размещает в столбец, у каждой таски есть чекбокс для отметки о выполнении
    // При нажатии на чекбокс меняется состояние и цвет таски, при нажатии на крестик таска удаляется
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
