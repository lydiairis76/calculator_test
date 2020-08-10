import { fireEvent, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

describe('calculator functionality', () => {
    beforeEach(() => {
      // Constructing a new JSDOM with this option is the key
      // to getting the code in the script tag to execute.
      // This is indeed dangerous and should only be done with trusted content.
      // https://github.com/jsdom/jsdom#executing-scripts
      dom = new JSDOM(html, { runScripts: 'dangerously' });
      container = dom.window.document.body;
    })
  
    test('can add two numbers', () => {
  
      let number1 = container.querySelector("#inputa");
      let number2 = container.querySelector("#inputb");
  
      fireEvent.change(number1, {target: { value: 3 } });
      fireEvent.change(number2, {target: { value: 2 } });
  
      const button = getByText(container, '+');
      fireEvent.click(button);
  
      let result = container.querySelector("#result");
      expect(parseFloat(result.innerHTML)).toBe(5);
    })
    test('can add subtract numbers', () => {
  
      let number1 = container.querySelector("#inputa");
      let number2 = container.querySelector("#inputb");
  
      fireEvent.change(number1, {target: { value: 3 } });
      fireEvent.change(number2, {target: { value: 2 } });
  
      const button = getByText(container, '-');
      fireEvent.click(button);
  
      let result = container.querySelector("#result");
      expect(parseFloat(result.innerHTML)).toBe(1);
    })
  
    test('can multiply two numbers', () => {
  
      let number1 = container.querySelector("#inputa");
      let number2 = container.querySelector("#inputb");
  
      fireEvent.change(number1, {target: { value: 3 } });
      fireEvent.change(number2, {target: { value: 2 } });
  
      const button = getByText(container, '*');
      fireEvent.click(button);
  
      let result = container.querySelector("#result");
      expect(parseFloat(result.innerHTML)).toBe(6);
    })
  
    test('can divide two numbers', () => {
  
      let number1 = container.querySelector("#inputa");
      let number2 = container.querySelector("#inputb");
  
      fireEvent.change(number1, {target: { value: 4 } });
      fireEvent.change(number2, {target: { value: 2 } });
  
      const button = getByText(container, '/');
      fireEvent.click(button);
  
      let result = container.querySelector("#result");
      expect(parseFloat(result.innerHTML)).toBe(2);
    })
  
  })