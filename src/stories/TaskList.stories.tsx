import React from 'react';
import TaskList, { Props } from '../Components/TaskList/taskList';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
    title: "Task List",
    component: TaskList,
    decorators: [(story: any) => <div style={{ padding: '3rem' }}>{story()}</div>]
} as Meta;

const Template: Story<Props> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});


export const withPinnedTasks = Template.bind({});
withPinnedTasks.args = {
    tasks: [
        {id: '1', title: 'Task 1', state :'TASK_INBOX' },
        {id: '2', title: 'Task 2', state :'TASK_INBOX'  },
        {id: '3', title: 'Task 3', state :'TASK_INBOX'  },
        {id: '4', title: 'Task 4', state :'TASK_INBOX'  },
        {id: '5', title: 'Task 5 (Pinned)', state :'TASK_PINNED'  },
        {id: '6', title: 'Task 6 (Pinned)', state :'TASK_PINNED'  },
    ],
}


export const withArchivedTasks = Template.bind({});
withArchivedTasks.args = {
    tasks: [
        {id: '1', title: 'Task 1', state :'TASK_INBOX' },
        {id: '2', title: 'Task 2', state :'TASK_INBOX'  },
        {id: '3', title: 'Task 3', state :'TASK_INBOX'  },
        {id: '4', title: 'Task 4', state :'TASK_INBOX'  },
        {id: '5', title: 'Task 5 (Archived)', state :'TASK_ARCHIVED'  },
        {id: '6', title: 'Task 6 (Archived)', state :'TASK_ARCHIVED'  },
    ],
}


export const withPinnedAndArchivedTasks = Template.bind({});
withPinnedAndArchivedTasks.args = {
    tasks: [
        {id: '1', title: 'Task 1', state :'TASK_INBOX' },
        {id: '2', title: 'Task 2', state :'TASK_INBOX'  },
        {id: '3', title: 'Task 3 (Pinned)', state :'TASK_PINNED'  },
        {id: '4', title: 'Task 4 (Pinned)', state :'TASK_PINNED'  },
        {id: '5', title: 'Task 5 (Archived)', state :'TASK_ARCHIVED'  },
        {id: '6', title: 'Task 6 (Archived)', state :'TASK_ARCHIVED'  },
    ],
}


export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
}


export const Empty = Template.bind({});
Empty.args = {
    loading: false,
    tasks: [],
}

