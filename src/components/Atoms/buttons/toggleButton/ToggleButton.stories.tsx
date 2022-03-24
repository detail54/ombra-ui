import { ComponentStory, ComponentMeta } from '@storybook/react'

import ToggleButton from '.'

export default {
  title: 'Ombra-UI/Atoms/Buttons/ToggleButton',
  component: ToggleButton,
  argTypes: {},
} as ComponentMeta<typeof ToggleButton>

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
)

export const BasicToggle = Template.bind({})
const on = true
BasicToggle.args = {
  isOn: on,
  onText: true,
  offText: true,
  styles: {
    isOn: on,
    size: 'small',
  },
  onClick: () => {},
}

export const AngleToggle = Template.bind({})
AngleToggle.args = {
  isOn: !on,
  onText: false,
  offText: false,
  styles: {
    isOn: !on,
    size: 'small',
    type: 'angle',
  },
  onClick: () => {},
}

export const OtherToggle = Template.bind({})
OtherToggle.args = {
  isOn: on,
  onText: true,
  offText: true,
  styles: {
    isOn: on,
    size: 'small',
    type: 'angle',
    onColor: '#f35f42',
    offColor: 'black',
  },
  onClick: () => {},
}
