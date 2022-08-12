import React from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import './task.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export interface task {
    id: string,
    title: string,
    state: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED",
}

export interface Props {
    task?: task;
    onPinTask?: (id:task['id']) => void,
    onUnpinTask?:(id:task["id"]) => void,
    onArchiveTask?: (id:task["id"]) => void
}

const Task: React.FC<Props> = ({ task, onPinTask, onUnpinTask, onArchiveTask}) => {
    
    function handleChange (task:task):void {
    
        if (task.state === "TASK_PINNED"){
          onUnpinTask!(task.id)
        }
        else{
          onPinTask!(task.id)
        }
    }

    return(
        <div className={`task-item`}>
            <div className = {"checkbox_Text"}>
                <label>
                    <input 
                        type="checkbox"
                        name= "checked"
                        defaultChecked={task!.state === "TASK_ARCHIVED"}
                        disabled={task!.state === "TASK_ARCHIVED"}
                        onClick={() => onArchiveTask!(task!.id)}
                    />
                </label>
                <h5 data-testid = "text" className = {task!.state === "TASK_ARCHIVED" ? "archived" : undefined}>{task!.title ? task!.title : "No Title Added"}</h5>
            </div>
            
            <div onClick={event => event.stopPropagation()}>
            {task!.state !== 'TASK_ARCHIVED' && (
            // <StarBorderRoundedIcon className = {task!.state !== 'TASK_PINNED'  ? "starUnpinned" : "starPinned"} onClick = {()=>{handleChange(task!)}} />
                <div>
                    {task!.state === "TASK_PINNED" ? 
                        <StarRoundedIcon className='starPinned' onClick = {()=>{handleChange(task!)}} />
                    :
                        <StarBorderRoundedIcon className='startUnpinned' onClick = {()=>{handleChange(task!)}} />
                    }
                </div>
        )}
            </div>
        </div>
    );
}

export default Task;

Task.defaultProps = {
    task: { id: "1", title: "Task 1", state: "TASK_INBOX"},
    onPinTask: () => console.log("Task Pinned!"),
    onUnpinTask: () => console.log("Task unpinned!"),
    onArchiveTask: () => console.log("Task Archived!"),
}