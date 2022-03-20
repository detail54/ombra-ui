import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '.'

export default {
  title: 'Ombra-UI/Atoms/Inputs/Input',
  component: Input,
  argTypes: {
    length: ['short', 'medium', 'long'],
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeHolder: 'Text',
}

export const ShortInput = Template.bind({})
ShortInput.args = {
  placeHolder: 'Text',
  length: 'short',
}

export const LongInput = Template.bind({})
LongInput.args = {
  placeHolder: 'Text',
  length: 'long',
}
