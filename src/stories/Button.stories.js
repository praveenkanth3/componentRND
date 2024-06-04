import CustomButton from '../components/Button/CustomButton.vue';
import { action } from '@storybook/addon-actions'


// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {},
  excludeStories: /.*dary$/,
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    onClickBtn: action('clicked')
  },
  parameters: {
  },
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],

};

export const Secondary = {
  args: {
    label: 'Button1',
    onClickBtn: action('clicked')
  },
};

export const Large = {
  args: {
    label: 'Button2',
    onClickBtn:action('clicked')
  },
};

export const Small = {
  args: {
    label: 'Button3',
    onClickBtn: action('clicked')
  },
};
