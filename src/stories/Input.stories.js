import InputBox  from "../components/InputBox/InputBox.vue";
import Vue from "vue";
import { within, userEvent, waitFor, screen } from '@storybook/testing-library';



export default {
  title: 'Components/InputBox',
  component: InputBox,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    inputType: { options: ['text', 'password'],control: { type: 'radio' }},
    maxlength: { control: 'text' },
    onChange: { action: 'onChange'},
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputBox },
  props: Object.keys(argTypes),
  template: '<InputBox v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
  value: '',
  inputType: 'text',
  maxlength: '20',
};

Default.play = async ({ canvasElement }) => {
  // await Vue.nextTick();
  // const canvas = within(canvasElement);
  // const input = canvas.getByPlaceholderText('Enter your username');
  const input  = await screen.getByPlaceholderText('Enter your username');
  await userEvent.type(input, 'storybook',{
    delay: 100,
  });
};

export const WithPasswordType = Template.bind({});
WithPasswordType.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  value: '',
  inputType: 'password',
  maxlength: '20',
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Short Input',
  placeholder: 'Enter text (max 5 chars)',
  value: '',
  inputType: 'text',
  maxlength: '5',
};

