import { ComponentStory, ComponentMeta } from '@storybook/react'
import StarRating from '.'

export default {
  title: 'Ombra-UI/Atoms/StarRating',
  component: StarRating,
  argTypes: {},
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  score: 2.5,
  styles: {
    starBaseColor: '#d1d5d9',
    starColor: '#ffe400',
  },
}
