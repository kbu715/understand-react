// @babel/preset-react에 의해
// Default 값은 React.createElement
// NOTE: React.createElement -> createElement 로 바꿔주는 주석
/* @JSX createElement */

import { createDOM, createElement, render } from './react';

const vdom2 = <p>
<h1>React 만들기</h1>
<ul>
  <li style="color: red">first item</li>
  <li style="color: blue">second item</li>
  <li style="color: green">third item</li>
</ul>
</p>

render(vdom2, document.querySelector('#root'));
