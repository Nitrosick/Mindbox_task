export interface Task {
    id: number;
    completed: boolean;
    title: string;
}

export interface ListItemProps {
    id: number;
    completed: boolean;
    title: string;
    setCompleted: (id: number) => void;
}

export interface FiltersProps {
    filter: string;
    setFilter: (filter: string) => void;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export interface FormProps {
    addTask: (value: string) => void;
}

export enum FilterValues {
    All = 'all',
    Active = 'active',
    Completed = 'completed'
}
