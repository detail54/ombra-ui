import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArrowButton from '.'

export default {
  title: 'Ombra-UI/Atoms/Buttons/ArrowButton',
  component: ArrowButton,
  argTypes: {},
} as ComponentMeta<typeof ArrowButton>

const Template: ComponentStory<typeof ArrowButton> = (args) => (
  <ArrowButton {...args} />
)

export const SingleArrow = Template.bind({})
SingleArrow.args = {
  arrowType: 'single',
  direction: 'right',
  disabled: false,
  styles: {
    disabled: false,
    margin: '0',
  },
  onClick: () => {},
}

export const DoubleArrow = Template.bind({})
DoubleArrow.args = {
  arrowType: 'double',
  direction: 'right',
  disabled: false,
  styles: {
    disabled: false,
    margin: '0',
  },
  onClick: () => {},
}
