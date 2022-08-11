import {Task, Tasks} from "./taskType";
import {Dispatch} from "react";

export type State = {
    newTask: string;
    tasks: Tasks
}

export enum ActionType { // Типы состояний
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle'
}

type ActionStringPayload = { // Для добавления и изменения
    type: ActionType.Add | ActionType.Change,
    payload: string
}

type ActionObjectPayload = { // Для удаления
    type: ActionType.Toggle | ActionType.Remove,
    payload: Task
}

export type Action = ActionStringPayload | ActionObjectPayload;

export type ContextState = { // Состояние контекста
    state: State;
    changeState: Dispatch<Action>
}
