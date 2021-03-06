import React from 'react';
import {shallow} from 'enzyme';
import InputGroup from '../InputGroup.tsx';

const input = <input key="input" value='This is in an input tag' />;
const div = <div key="div">This is in a div tag</div>;
const p = <p key="p">This is in a paragraph tag</p>;

const inputPrepend = <span>$</span>;
const inputAppend = <span>%</span>;

/**
 * Single children
 */
const singleChildAttributesWithoutProsthetics = {
    children: input
};

const singleChildAttributesWithPrepend = {
    children: input,
    prepend: inputPrepend
};

const singleChildAttributesWithAppend = {
    children: input,
    append: inputAppend
};

const singleChildAttributesWithProsthetics = {
    children: input,
    prepend: inputPrepend,
    append: inputAppend
};

/**
 * Multiple children
 */
const multipleChildrenAttributesWithoutProsthetics = {
    children: [input, div, p]
};

const multipleChildrenAttributesWithPrepend = {
    children: [input, div, p],
    prepend: inputPrepend
};

const multipleChildrenAttributesWithAppend = {
    children: [input, div, p],
    append: inputAppend
};

const multipleChildrenAttributesWithProsthetics = {
    children: [input, div, p],
    append: inputAppend,
    prepend: inputPrepend
};

describe('<InputGroup />', () => {
    it('should render a single <input /> component', () => {
        const wrapper = shallow(<InputGroup {...singleChildAttributesWithoutProsthetics} />);
        
        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(false);
        expect(wrapper.is('.input-append')).toBe(false);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(false);
        expect(wrapper.contains(inputAppend)).toBe(false);
    });

    it('should render a single <input /> component with prepend', () => {
        const wrapper = shallow(<InputGroup {...singleChildAttributesWithPrepend} />);

        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(true);
        expect(wrapper.is('.input-append')).toBe(false);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(true);
        expect(wrapper.contains(inputAppend)).toBe(false);
    });

    it('should render a single <input /> component with append', () => {
        const wrapper = shallow(<InputGroup {...singleChildAttributesWithAppend} />);

        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(false);
        expect(wrapper.is('.input-append')).toBe(true);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(false);
        expect(wrapper.contains(inputAppend)).toBe(true);
    });

    it('should render a single <input /> component with prepend & append', () => {
        const wrapper = shallow(<InputGroup {...singleChildAttributesWithProsthetics} />);

        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(true);
        expect(wrapper.is('.input-append')).toBe(true);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(true);
        expect(wrapper.contains(inputAppend)).toBe(true);
    });

    it('should render one each of <input />, <div /> & <p /> components', () => {
        const wrapper = shallow(<InputGroup {...multipleChildrenAttributesWithoutProsthetics} />);
        
        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(false);
        expect(wrapper.is('.input-append')).toBe(false);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(div)).toBe(true);
        expect(wrapper.contains(p)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(false);
        expect(wrapper.contains(inputAppend)).toBe(false);
    });

    it('should render one each of <input />, <div /> & <p /> components with prepend', () => {
        const wrapper = shallow(<InputGroup {...multipleChildrenAttributesWithPrepend} />);
        
        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(true);
        expect(wrapper.is('.input-append')).toBe(false);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(div)).toBe(true);
        expect(wrapper.contains(p)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(true);
        expect(wrapper.contains(inputAppend)).toBe(false);
    });

    it('should render one each of <input />, <div /> & <p /> components with append', () => {
        const wrapper = shallow(<InputGroup {...multipleChildrenAttributesWithAppend} />);
        
        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(false);
        expect(wrapper.is('.input-append')).toBe(true);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(div)).toBe(true);
        expect(wrapper.contains(p)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(false);
        expect(wrapper.contains(inputAppend)).toBe(true);
    });

    it('should render one each of <input />, <div /> & <p /> components with prepend & append', () => {
        const wrapper = shallow(<InputGroup {...multipleChildrenAttributesWithProsthetics} />);
        
        expect(wrapper.is('.input-group')).toBe(true);
        expect(wrapper.is('.input-prepend')).toBe(true);
        expect(wrapper.is('.input-append')).toBe(true);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(div)).toBe(true);
        expect(wrapper.contains(p)).toBe(true);
        expect(wrapper.contains(inputPrepend)).toBe(true);
        expect(wrapper.contains(inputAppend)).toBe(true);
    });
});