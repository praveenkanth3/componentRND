import InputBox  from "../components/InputBox/InputBox.vue";
import { within, userEvent } from '@storybook/testing-library';



export default {
  title: 'Components/InputBox',
  component: InputBox,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    inputType: { control: 'text' },
    maxlength: { control: 'text' },
    onChange: { action: 'onChange' },
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
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText('Enter your username');
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

// WithPasswordType.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const input = canvas.getByPlaceholderText('Enter your password');
//   await userEvent.type(input, 'secretpassword');
//   expect(input.value).toBe('secretpassword');
// };

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Short Input',
  placeholder: 'Enter text (max 5 chars)',
  value: '',
  inputType: 'text',
  maxlength: '5',
};

// WithMaxLength.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const input = canvas.getByPlaceholderText('Enter text (max 5 chars)');
//   await userEvent.type(input, '123456');
//   expect(input.value).toBe('12345'); // Ensure maxlength is enforced
// };


    // "@babel/plugin-proposal-optional-chaining": "^7.21.0",
    // "@babel/plugin-transform-runtime": "^7.24.6",
