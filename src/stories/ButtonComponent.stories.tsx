import React from 'react';
import ButtonComponent, { Props } from '../Components/Button/button';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Button',
    component: ButtonComponent,
} as Meta;

const Template: Story<Props> = args => <ButtonComponent {...args} />;

export const Default =  Template.bind({});

export const secondary = Template.bind({});
secondary.args = {
    color: "secondary"
}

export const outlined = Template.bind({});
outlined.args = {
    variant: "outlined"
}

export const large = Template.bind({});
large.args = {
    size: "large"
}

export const small = Template.bind({});
small.args = {
    size: "small"
}