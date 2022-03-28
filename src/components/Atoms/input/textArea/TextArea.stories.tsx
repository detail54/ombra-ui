import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextArea from '.'

export default {
  title: 'Ombra-UI/Atoms/Input/TextArea',
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  text: '',
  placeHolder: 'TextArea',
  styles: {
    areaBgColor: '#2a2a2a',
    fontColor: 'white',
    border: '1px solid #131313',
  },
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
}
