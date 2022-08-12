import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Task, { Props } from '../Components/Task/task';

export default {
    title: "Task",
    component: Task
} as Meta;

const Template: Story<Props> = (args) => <Task {...args}/>;

export const Default = Template.bind({});

export const OnPinned = Template.bind({});
OnPinned.args = {
    task: { id: "1", title: "Pinned Task", state: "TASK_PINNED" }
}

export const OnArchived = Template.bind({});
OnArchived.args = {
    task: { id: "1", title: "Pinned Task", state: "TASK_ARCHIVED" }
}