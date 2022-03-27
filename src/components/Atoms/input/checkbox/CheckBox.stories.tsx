import { ComponentStory, ComponentMeta } from '@storybook/react'

import CheckBox from '.'

export default {
  title: 'Ombra-UI/Atoms/input/CheckBox',
  component: CheckBox,
  argTypes: {},
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

export const AngleCheckBox = Template.bind({})
AngleCheckBox.args = {
  styles: {
    checkBoxType: 'angle',
    checkBoxSize: 'medium',
    checkedMarkColor: 'white',
    checkedBoxColor: '#0075ff',
  },
}

export const RoundCheckBox = Template.bind({})
RoundCheckBox.args = {
  styles: {
    checkBoxType: 'round',
    checkBoxSize: 'medium',
    checkedMarkColor: 'white',
    checkedBoxColor: '#0075ff',
  },
}
