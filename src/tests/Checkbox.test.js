import CheckBox from "../components/Checkbox.vue";
import { mount, shallowMount } from '@vue/test-utils';


describe('CheckBox.vue', () => {
    test('renders correctly with given props', () => {
        const wrapper = mount(CheckBox, {
            propsData: { text: 'Test Checkbox', isChecked: false, onChange: () => {}, id: 'test-checkbox' }})
        console.log(wrapper.html())
        expect(wrapper.find('label').text()).toBe('Test Checkbox');
        expect(wrapper.find('input').attributes('id')).toBe('test-checkbox');
    });
    it('calls handleChange and onChange prop when checkbox is clicked', async () => {
        const onChangeMock = jest.fn();
        const wrapper = mount(CheckBox, { propsData:{ text: 'Test Checkbox', isChecked: false, onChange: onChangeMock}});

        const checkbox = wrapper.find('input[type="checkbox"]');
        await checkbox.trigger('change');

        expect(onChangeMock).toHaveBeenCalledWith(true);
    });
})