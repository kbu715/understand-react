// @babel/preset-react에 의해
// Default 값은 React.createElement
// NOTE: React.createElement -> createElement 로 바꿔주는 주석
/* @jsx createElement */

import { createElement, render } from './react';

function Title(props) {
  return <h1>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const vdom2 = <p>
  <Title label='React'>React 정말 정말 정말 잘 만들기</Title>
  <ul>
    <Item color="red">first item</Item>
    <Item color="blue">second item</Item>
    <Item color="green">third item</Item>
  </ul>
</p>

render(vdom2, document.querySelector('#root'));
