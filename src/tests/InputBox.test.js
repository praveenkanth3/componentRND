// InputBox.test.js
import { shallowMount } from '@vue/test-utils';
import InputBox from '@/components/InputBox.vue';

describe('InputBox.vue', () => {
  it('renders label when passed', () => {
    const label = 'Test Label';
    const wrapper = shallowMount(InputBox, {
      propsData: { label, value: '', onChange: jest.fn() }
    });
    expect(wrapper.find('.label').text()).toMatch(label);
  });

  it('renders input with correct placeholder', () => {
    const placeholder = 'Enter text';
    const wrapper = shallowMount(InputBox, {
      propsData: { placeholder, value: '', onChange: jest.fn() }
    });
    expect(wrapper.find('input').attributes('placeholder')).toBe(placeholder);
  });

  it('renders input with correct type', () => {
    const inputType = 'password';
    const wrapper = shallowMount(InputBox, {
      propsData: { inputType, value: '', onChange: jest.fn() }
    });
    expect(wrapper.find('input').attributes('type')).toBe(inputType);
  });

  it('renders input with default type text', () => {
    const wrapper = shallowMount(InputBox, {
      propsData: { value: '', onChange: jest.fn() }
    });
    expect(wrapper.find('input').attributes('type')).toBe('text');
  });

  it('calls onChange method when input changes', async () => {
    const onChange = jest.fn();
    const wrapper = shallowMount(InputBox, {
      propsData: { value: '', onChange }
    });
    const input = wrapper.find('input');
    await input.setValue('New Value');
    expect(onChange).toHaveBeenCalled();
  });

  it('renders input with correct maxlength', () => {
    const maxlength = '10';
    const wrapper = shallowMount(InputBox, {
      propsData: { maxlength, value: '', onChange: jest.fn() }
    });
    expect(wrapper.find('input').attributes('maxlength')).toBe(maxlength);
  });

  it('renders input with default maxlength 9999', () => {
    const wrapper = shallowMount(InputBox, {
      propsData: { value: '', onChange: jest.fn() }
    });
    expect(wrapper.find('input').attributes('maxlength')).toBe('9999');
  });

  it('passes the correct value to the input', () => {
    const value = 'Test Value';
    const wrapper = shallowMount(InputBox, {
      propsData: { value, onChange: jest.fn() }
    });
    expect(wrapper.find('input').element.value).toBe(value);
  });
});
