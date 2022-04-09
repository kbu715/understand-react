import { createDOM, createElement, render } from './react';

const vdom2 = createElement('p', {}, 
  createElement('h1', {}, "React 만들기"),
  createElement('ul', {}, 
    createElement('li', { style: "color:red" }, 'first item'),
    createElement('li', { style: "color:blue" }, 'second item'),
    createElement('li', { style: "color:green" }, 'third item')
  )
);

console.log(vdom2)

render(vdom2, document.querySelector('#root'));
