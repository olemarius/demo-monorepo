import { describe, it, expect } from 'vitest'; 

import { mount } from '@vue/test-utils';

import MyBrandButton from './MyBrandButton.vue';

describe('MyBrandButton', () => {
    it('renders a button', () => {
        const wrapper = mount(MyBrandButton);
        expect(wrapper.find('button').exists()).toBe(true);
    }); 

});