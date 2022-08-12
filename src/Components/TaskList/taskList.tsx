import React from 'react';
import './taskList.css';
import Task, { task } from '../Task/task';
import { CircularProgress } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export interface Props {
    loading?: boolean;
    tasks?: task[];
    onPinTask?: (id: task["id"]) => void;
    onUnpinTask?: (id: task["id"]) => void;
    onArchiveTask?: (id: task["id"]) => void;
}


const TaskList: React.FC<Props> = ({ loading, tasks, onPinTask, onUnpinTask, onArchiveTask }) => {
    
    const events = {
        onPinTask,
        onArchiveTask,
        onUnpinTask,
    }
    
    if(loading){
        return(
            <div className='loader'>
                <CircularProgress />
            </div>
        )
    }

    if(tasks!.length === 0){
        return(
            <div className="emptyListWrapper">
                <CheckCircle className="tickIcon" />
                <div className="emptyListText">You have no tasks</div>
                <div className="emptyListText">Sit back and relax</div>
            </div>
        )
    }

    const taskInOrder = [
        ...tasks!.filter(t => t.state === "TASK_PINNED"),
        ...tasks!.filter(t => t.state === "TASK_INBOX"),
        ...tasks!.filter(t => t.state === "TASK_ARCHIVED"),
    ]
    
    return(
        <>
            {taskInOrder.map(task => (
                <Task task={task} {...events} />
            ))}
        </>
    );
}

export default TaskList;

TaskList.defaultProps = {
    tasks: [{ id: '1', title: 'Task 1', state: 'TASK_INBOX' }, { id: '2', title: 'Task 2', state: 'TASK_INBOX' }, { id: '3', title: 'Task 3', state: 'TASK_INBOX' }, { id: '4', title: 'Task 4', state: 'TASK_INBOX' }, { id: '5', title: 'Task 5', state: 'TASK_INBOX' }, { id: '6', title: 'Task 6', state: "TASK_INBOX" }],
    loading: false,
    onArchiveTask: () => console.log("task archived"),
    onPinTask: () => console.log("task pinned"),
    onUnpinTask: () => console.log("task unpinned"),
}