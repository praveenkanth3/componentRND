import MyButton from "../components/MyButton.vue";
import { mount } from '@vue/test-utils';


describe('MyButton.vue', () => {
    test('test 1',async () => {
        const wrapper = mount(MyButton, {
                propsData: { isslot: true  }
        })
        // await wrapper.trigger('click')
        // expect(wrapper.emitted()).toHaveProperty('click')
    })
})