const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props)
    .forEach(([name, value]) => element.setAttribute(name, value));

  node.children
    .map(createDOM) //NOTE: 재귀 함수 이용
    .forEach(element.appendChild.bind(element)); //NOTE: context 현재 element로 고정시키기

  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

function useState(initValue) {
  let position = currentComponent - 1;

  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = nextValue => {
    hooks[position] = nextValue;
  };

  return [ hooks[position], modifier ];
}

// props가 null일 때 에러!
// props = {} //NOTE: default parameter는 값이 undefined 일때만 작동!
export function createElement(tag, props, ...children) {
  props = props || {};
  
  if (typeof tag === 'function') {
      if (tag.prototype instanceof Component) {
        const instance = new tag(makeProps(props, children));
        return instance.render();
      }
      hooks[currentComponent] = null;
      currentComponent++;

      if (children.length > 0) {
        return tag(makeProps(props, children))
      } else {
        return tag(props);
      }
  } 
    
  return { tag, props, children };
  
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));  
}

/*
export const render = (function() {
  let prevDom = null;

  return function(vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    // diff
    // 바뀐 부분만 update하는 로직

    container.appendChild(createDOM(vdom));
  }
})();
*/