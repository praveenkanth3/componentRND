import { action } from '@storybook/addon-actions';
import CheckBox from '../components/Checkbox.vue';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {
    onChange: { action: 'changed' },
    isChecked: { control: 'boolean' },
    text: { control: 'text' },
    hasError: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CheckBox },
  template: '<CheckBox v-bind="$props" @change="onChange" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Default Checkbox',
  isChecked: false,
  hasError: false,
};

export const Checked = Template.bind({});
Checked.args = {
  text: 'Checked Checkbox',
  isChecked: true,
  hasError: false,
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  isChecked: false,
  hasError: false,
};
