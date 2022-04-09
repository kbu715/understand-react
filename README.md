# 만들어 보며 이해하는 React & Redux

## 필기

Babel은 `compiler`
Webpack은 `bundler`

'Babel'preset-react 에 들어가 있는 Transpiler는 JSX 구문을 이런식으로 바꿔주는 변환기가 들어가 있다.

```javascript
//JSX
  const vdom2 = <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color: red">first item</li>
      <li style="color: blue">second item</li>
      <li style="color: green">third item</li>
    </ul>
```

```javascript
const vdom2 = createElement('p', {}, 
  createElement('h1', {}, "React 만들기"),
  createElement('ul', {}, 
    createElement('li', { style: "color:red" }, 'first item'),
    createElement('li', { style: "color:blue" }, 'second item'),
    createElement('li', { style: "color:green" }, 'third item')
  )
);
```
