import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../../Atoms/buttons/basicButton'

export default {
  title: 'Ombra-UI/Templates/Boards/CardBoard',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'round',
    size: 'medium',
    fontColor: 'black',
    border: '1px solid black',
  },
}
