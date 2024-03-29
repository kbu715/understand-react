// @babel/preset-react에 의해
// Default 값은 React.createElement
// NOTE: React.createElement -> createElement 로 바꿔주는 주석
/* @jsx createElement */

import { createElement, render, Component } from './react';

// function Title(props) {
//   return <h1>{props.children}</h1>;
// }

class Title extends Component {
  render() {
    return <h1>{ this.props.children }</h1>;
  }
}

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const App = () => <p>
  <Title label='React'>React 정말 잘 만들기</Title>
  <ul>
    <Item color="red">first item</Item>
    <Item color="blue">second item</Item>
    <Item color="green">third item</Item>
  </ul>
</p>

render(<App />, document.querySelector('#root'));
