import { ComponentStory, ComponentMeta } from '@storybook/react'
import Title from '.'

export default {
  title: 'Ombra-UI/Atoms/Title',
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'TITLE',
  importance: 1,
  styles: {
    fontColor: 'black',
    textAlign: 'left',
  },
}
