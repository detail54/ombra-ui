import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Ombra-UI/Atoms/Buttons/BasicButton',
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
    fontColor: { control: 'color' },
    buttonType: ['round', 'middle', 'angled'],
    size: ['small', 'medium', 'large'],
    border: 'string',
  },
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

export const RoundLarge = Template.bind({})
RoundLarge.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'round',
    size: 'large',
    fontColor: 'black',
    border: '1px solid black',
  },
}

export const RoundSmall = Template.bind({})
RoundSmall.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'round',
    size: 'small',
    fontColor: 'black',
    border: '1px solid black',
  },
}

export const MiddleLarge = Template.bind({})
MiddleLarge.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'middle',
    size: 'large',
    fontColor: 'black',
    border: '1px solid black',
  },
}

export const MiddleMedium = Template.bind({})
MiddleMedium.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'middle',
    size: 'medium',
    fontColor: 'black',
    border: '1px solid black',
  },
}

export const MiddleSmall = Template.bind({})
MiddleSmall.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'middle',
    size: 'small',
    fontColor: 'black',
    border: '1px solid black',
  },
}

export const AngledLarge = Template.bind({})
AngledLarge.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'angled',
    size: 'large',
    fontColor: 'black',
    border: '1px solid black',
  },
}

export const AngledMedium = Template.bind({})
AngledMedium.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'angled',
    size: 'medium',
    fontColor: 'black',
    border: '1px solid black',
  },
}

export const AngledSmall = Template.bind({})
AngledSmall.args = {
  label: 'Button',
  styles: {
    bgColor: 'white',
    buttonType: 'angled',
    size: 'small',
    fontColor: 'black',
    border: '1px solid black',
  },
}
