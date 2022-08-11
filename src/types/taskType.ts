export type TaskName = string;

export type Task = { // Описание объекта Задания (имя и отметка сделано или не сделано)
    name: string;
    isDone: boolean
}

export type Tasks = Task[]; // Массив заданий

