import * as React from 'react';

import {useContext, useState} from "react";
import {ContextApp} from "./App";

import {TaskName} from "../types/taskType";
import {ActionType} from "../types/stateType";

const NewTask: React.FC = () => {
    const {state, changeState} = useContext(ContextApp);

    // Функция добавления таски, принятый тест оформляет в таску с пометкой не сделано и обнуляет поле ввода
    const addTask = (event: React.FormEvent<HTMLFormElement>, task: TaskName) => {
        event.preventDefault();
        changeState({type: ActionType.Add, payload: task})
        changeState({type: ActionType.Change, payload: ''})
    }

    // Функция изменения таски позволяет наполнить таску содержимым текстом
    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeState({type: ActionType.Change, payload: event.target.value})
    }

    // Часть для редактирования(добавления) заданий, при отправке формы вызывает добавление таски
    return (
        <>
            <div id='content'>
                <form onSubmit={(event)=>addTask(event, state.newTask)}>
                    <button type="submit" className='add-button'>Add a task</button>
                    <p>  </p>
                    <input id='inp_text' type='text' onChange={(event)=>changeTask(event)} value={state.newTask}/>
                </form>
            </div>
        </>
    )
};

export default NewTask;
