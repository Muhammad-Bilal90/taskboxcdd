import React from 'react';
import "./taskInput.css";
import ButtonComponent from '../Button/button';

export interface Props {
    handleSave: () => void,
    handleCancel: () => void,
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


const TaskInput: React.FC<Props> = ({ handleSave, handleCancel, onInputChange}) => {
    return(
        <div className='newTaskContainer'>
            <h3 className='newTaskHeading'>Creat New Task</h3>
            <input type="text" placeholder="Add New Task" name="task"
            onChange={onInputChange}
            />
            <div className='buttonContainer'>
                <ButtonComponent onClick={handleSave}>Save</ButtonComponent>
                <ButtonComponent onClick={handleCancel}>Cancel</ButtonComponent>
            </div>    
        </div>
    );
}

export default TaskInput;

TaskInput.defaultProps = {
    handleSave: () => console.log("TASK SAVED!"),
    handleCancel: () => console.log("TASK Cancelled!"),
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
}