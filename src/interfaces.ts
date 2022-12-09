export interface Task {
    id: number;
    completed: boolean;
    title: string;
}

export interface ListItemProps {
    id: number;
    completed: boolean;
    title: string;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export interface FiltersProps {
    filter: string;
    setFilter: (filter: string) => void;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export interface FormProps {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}
