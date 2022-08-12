import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import TaskInput, { Props } from '../Components/TaskInput/taskInput';

export default {
    title: "Task Input",
    component: TaskInput
}

const Template: Story<Props> = (args) => <TaskInput {...args}/>;

export const Default = Template.bind({});

export const HandleSave = Template.bind({});
HandleSave.args ={
    handleSave: () => alert("Task Saved!"),
}

export const HandleCancel = Template.bind({});
HandleCancel.args ={
    handleCancel: () => alert("Task Cancelled!"),
}

export const onInputChange = Template.bind({});
onInputChange.args ={
    onInputChange: (e) => console.log([e.target.name] + ": " + e.target.value),
}
